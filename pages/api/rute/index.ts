// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {
  getDatabase,
  ref,
  query,
  orderByChild,
  onValue,
  equalTo,
} from "firebase/database";

export default async function handler(req: any, res: any) {
  const tujuan = req.query["tujuan"];
  const key = req.query["key"];
  return new Promise(async (resolve, reject) => {
    const db = getDatabase();
    var Rutes = query(ref(db, "RUTE"), orderByChild("State"));
    // if (tujuan != "" && tujuan != undefined && tujuan != "Semua") {
    //   Rutes = query(ref(db, "RUTE"), orderByChild("State"), equalTo(tujuan));
    // }
    if (key != "" && key != undefined) {
      Rutes = query(ref(db, "RUTE"), orderByChild("State"), equalTo(key));
    }
    var data: any[] = [];
    onValue(Rutes, (snapshot: any) => {
      if (snapshot.exists()) {
        snapshot.forEach((child: any) => {
          data.push({
            _key: child.key,
            ...child.val(),
          });
        });
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
