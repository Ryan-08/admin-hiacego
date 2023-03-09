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
  return new Promise(async (resolve, reject) => {
    const db = getDatabase();
    var Beritas = query(ref(db, "BERITA"));
    var data: any[] = [];
    onValue(Beritas, (snapshot: any) => {
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
