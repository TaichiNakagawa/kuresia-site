import { useState } from "react";

export default function ContactFormSection() {
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

  const handleSubmit = (e) => {
    e.preventDefault();

    // 簡易バリデーション
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("全ての項目を入力してください。");
      return;
    }

    // 本来はここで送信処理(APIやFirebase FunctionsにPOST)
    console.log("送信データ:", formData);

    setStatus("送信が完了しました！");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-16 px-6 bg-green-950 bg-opacity-80">
      <div className="relative max-w-3xl mx-auto z-10">
        <h2 className="text-3xl font-bold mb-6 text-center border-b border-green-400 inline-block pb-2">
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