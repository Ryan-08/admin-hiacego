// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getDatabase, ref, set } from "firebase/database";

export default async function handler(req: any, res: any) {
  const data = req.body;
  console.log(data);

  return new Promise(async (resolve, reject) => {
    const db = getDatabase();
    set(ref(db, "RUTE/" + data["key"]), {
      Address: data["alamat"],
      Duration: data["durasi"],
      Fee: data["harga"],
      Key: data["key"],
      State: data["tujuan"],
    })
      .then(() => {
        // Data saved successfully!
        console.log(data["key"]);
        res.status(200).end();
      })
      .catch((error) => {
        // The write failed...
        res.status(400).end();
      });
  });
}
