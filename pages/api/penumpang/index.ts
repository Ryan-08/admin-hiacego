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
  const total = req.query["total"];
  // console.log(tujuan);
  return new Promise(async (resolve, reject) => {
    const db = getDatabase();
    var Tiket = query(ref(db, "TIKET"), orderByChild("noTiket"));
    if (tujuan != "" && tujuan != "Semua") {
      Tiket = query(ref(db, "TIKET"), orderByChild("tujuan"), equalTo(tujuan));
      console.log(tujuan);
    }
    var data: any[] = [];
    var count = 0;

    onValue(Tiket, (snapshot: any) => {
      snapshot.forEach((child: any) => {
        count++;
        data.push({
          _key: child.key,
          ...child.val(),
        });
      });
    });
    if (data != null || data != undefined) {
      if (total != null && total) {
        res.status(200).json(count);
      } else {
        res.status(200).json(data);
      }
      // console.log(data);
    } else {
      res.status(404).end();
    }
  });
}
