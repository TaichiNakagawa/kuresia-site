import { useState } from "react";
import { db } from "../../../../firebaseConfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function ContactFormSection({ id }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

    const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "contacts"), {
        ...formData,
        createdAt: serverTimestamp()
      });
      setStatus("送信しました！ありがとうございます。");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("送信エラー:", error);
      setStatus("送信に失敗しました。");
    }
  };

  return (
    <section id={id} classname="py-16 px-6 relative z-10">
      <div className="relative max-w-3xl mx-auto z-10">
      <h2 className="text-3xl font-bold mb-6 border-b border-green-400 inline-block mx-auto pb-2">
        お問い合わせ
      </h2>
        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-green-800 bg-opacity-60 p-8 rounded-xl shadow-lg"
        >
          <div>
            <label htmlFor="name" className="block text-lg mb-2">
              お名前
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="お名前"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded-lg text-black bg-white/90"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-lg mb-2">
              メールアドレス
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="メールアドレス"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-lg text-black bg-white/90"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-lg mb-2">
              メッセージ
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="お問い合わせ内容"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 rounded-lg text-black bg-white/90"
            ></textarea>
          </div>

          {status && (
            <p className="text-center text-yellow-300 font-semibold">{status}</p>
          )}

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
          >
            送信
          </button>
        </form>
      </div>
    </section>
  );
}