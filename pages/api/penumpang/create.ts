// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { child, getDatabase, push, ref, set } from "firebase/database";

export default async function handler(req: any, res: any) {
  const data = req.body;
  console.log(data);

  return new Promise(async (resolve, reject) => {
    const db = getDatabase();
    set(ref(db, "TIKET/" + data["noTiket"]), {
      travel: data["travel"],
      nama: data["nama"],
      noHp: data["noHp"],
      noKursi: data["noKursi"],
      noTiket: data["noTiket"],
      tujuan: data["tujuan"],
      jam: data["jam"],
      tanggal: data["tanggal"],
      harga: data["harga"],
      alamat: data["alamat"],
      status: data["status"],
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
