// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { child, getDatabase, push, ref, set } from "firebase/database";

export default async function handler(req: any, res: any) {
  const data = req.body;
  console.log(data);

  return new Promise(async (resolve, reject) => {
    const db = getDatabase();
    var key = push(child(ref(db), "BERITA")).key;
    set(ref(db, "BERITA/" + key), {
      judul: data["judul"],
      link: data["link"],
      konten: data["konten"],
    })
      .then(() => {
        // Data saved successfully!
        res.status(200).end();
      })
      .catch((error) => {
        // The write failed...
        res.status(400).end();
      });
  });
}
