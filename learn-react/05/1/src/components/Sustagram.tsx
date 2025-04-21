/* 조건,반복 연습문제 */
export default function App() {
  const images = [
    "https://cdn.pixabay.com/photo/2024/11/30/15/55/eiffel-tower-9235220_1280.jpg",
    "https://cdn.pixabay.com/photo/2024/11/30/15/55/eiffel-tower-9235220_1280.jpg",
    "https://cdn.pixabay.com/photo/2024/11/30/15/55/eiffel-tower-9235220_1280.jpg",
    "https://cdn.pixabay.com/photo/2024/11/30/15/55/eiffel-tower-9235220_1280.jpg",
    "https://cdn.pixabay.com/photo/2024/11/30/15/55/eiffel-tower-9235220_1280.jpg",
    "https://cdn.pixabay.com/photo/2024/11/30/15/55/eiffel-tower-9235220_1280.jpg",
  ];
  return (
    <div className="w-full max-w-4xl mx-auto py-6 px-4">
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">SUSTAGRAM</h1>
        {/* More Buttons */}
      </header>
      <div className="grid grid-cols-3 gap-4">
        {images.map((src, index) => (
          <a key={index} className="group" href="#">
            <img
              src={src}
              width="400"
              height="400"
              alt={`Photo ${index + 1}`}
              className="w-full h-full object-cover rounded-lg group-hover:opacity-80 transition-opacity"
              style={{ aspectRatio: "400 / 400", objectFit: "cover" }}
            />
          </a>
        ))}
      </div>
    </div>
  );
}
