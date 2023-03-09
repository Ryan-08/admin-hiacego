// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {
  child,
  get,
  getDatabase,
  ref,
  remove,
  update,
} from "firebase/database";

export default async function handler(req: any, res: any) {
  const key = req.query.id;
  console.log(req.method);
  if (req.method === "DELETE") {
    return new Promise(async (resolve, reject) => {
      const db = getDatabase();
      // data entry
      console.log(key);

      remove(ref(db, "BERITA/" + key))
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
