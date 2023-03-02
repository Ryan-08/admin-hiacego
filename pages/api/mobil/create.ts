// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { child, getDatabase, push, ref, set } from "firebase/database";

export default async function handler(req: any, res: any) {
  const data = req.body;
  console.log(data);

  return new Promise(async (resolve, reject) => {
    const db = getDatabase();
    var key = push(child(ref(db), "Mobil")).key;
    set(ref(db, "Mobil/" + key), {
      travel: data["nama"],
      plat: data["plat"],
      rute: data["rute"],
      jadwal: data["jadwal"],
    })
      .then(() => {
        // Data saved successfully!
        console.log(data["nama"]);
        res.status(200).end();
      })
      .catch((error) => {
        // The write failed...
        res.status(400).end();
      });
  });
}
