// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {
  child,
  equalTo,
  get,
  getDatabase,
  onValue,
  orderByChild,
  query,
  ref,
  remove,
  set,
  update,
} from "firebase/database";

export default async function handler(req: any, res: any) {
  const key = req.query.id;
  console.log(req.method);
  if (req.method === "POST") {
    const data = req.body;
    console.log(data);

    return new Promise(async (resolve, reject) => {
      const db = getDatabase();
      // data entry
      update(ref(db, "Mobil/" + key), data);
    });
  } else if (req.method === "GET") {
    return new Promise(async (resolve, reject) => {
      const dbRef = ref(getDatabase());
      get(child(dbRef, `Mobil/${key}`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            // console.log(snapshot.val());
            res.status(200).json(snapshot.val());
          } else {
            res.status(404).end();
          }
        })
        .catch((error) => {
          res.status(400).end();
        });
    });
  } else if (req.method === "DELETE") {
    return new Promise(async (resolve, reject) => {
      const db = getDatabase();
      // data entry
      console.log(key);

      remove(ref(db, "Mobil/" + key))
        .then(() => {
          console.log(`location ${key} removed`);
          res.status(200).end();
        })
        .catch((err) => {
          console.log("Failed");
          res.status(400).end();
        });
    });
  }
}
