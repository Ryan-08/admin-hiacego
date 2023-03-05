// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {
  getDatabase,
  ref,
  child,
  get,
  equalTo,
  onValue,
  orderByChild,
  query,
} from "firebase/database";

export default async function handler(req: any, res: any) {
  const travel = req.query["travel"];
  const rute = req.query["rute"];
  const jam = req.query["jam"];
  // console.log(rute);

  return new Promise(async (resolve, reject) => {
    const db = getDatabase();
    var Tiket = query(ref(db, "Mobil"), orderByChild("travel"));
    if (travel != "" && travel != undefined && travel != "Semua") {
      Tiket = query(ref(db, "Mobil"), orderByChild("travel"), equalTo(travel));
    }
    var data: any[] = [];
    onValue(Tiket, (snapshot: any) => {
      if (snapshot.exists()) {
        if (rute != "" && rute != undefined && rute != "Semua") {
          if (jam != "" && jam != undefined && jam != "Semua") {
            addDataWithSpecificRuteAndJadwal(snapshot, data, rute, jam);
          } else {
            addDataWithSpecificRute(snapshot, data, rute);
          }
        } else {
          addData(snapshot, data);
        }
      }
    });
    if (data != null || data != undefined) {
      res.status(200).json(data);
      // console.log(data);
    } else {
      res.status(404).end();
    }
  });
}

function addData(snapshot: any, data: any) {
  snapshot.forEach((child: any) => {
    data.push({
      _key: child.key,
      ...child.val(),
    });
  });
}
function addDataWithSpecificRute(snapshot: any, data: any, rute: any) {
  snapshot.forEach((child: any) => {
    if (child.val().rute.includes(rute)) {
      data.push({
        _key: child.key,
        ...child.val(),
      });
    }
  });
}
function addDataWithSpecificRuteAndJadwal(
  snapshot: any,
  data: any,
  rute: any,
  jam: any
) {
  snapshot.forEach((child: any) => {
    if (child.val().rute.includes(rute)) {
      if (child.val().jadwal.includes(jam)) {
        data.push({
          _key: child.key,
          ...child.val(),
        });
      }
    }
  });
}
