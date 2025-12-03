import { useState } from "react";
import NavBar from "../components/NavBar";
import PageDetail from "../assets/images/PageDetail.png";
import books from "../assets/images/books.png";

const images = [
  PageDetail,
  books,
];

function DetailPage() {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <>
      <NavBar />

      <div className="pt-[100px] w-full bg-white dark:bg-black min-h-screen text-black dark:text-white">
        <h1 className="pl-[40px] pt-[40px] text-2xl font-bold">About Product</h1>

        <div className="w-[80%] mx-auto mt-8 flex gap-4 mb-12">
          {/* Левая колонка с миниатюрами */}
          <div className="flex flex-col items-center gap-2 overflow-y-auto max-h-[450px]">
            
            {images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt=""
                className={`w-20 h-20 object-cover cursor-pointer border-2 ${
                  selectedImage === img ? "border-blue-500" : "border-gray-300"
                }`}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>

          {/* Основное изображение */}
          <div className="flex-1">
            <img src={selectedImage} alt="" className="h-full object-cover" />
          </div>

          {/* Детали продукта */}
          <div className="flex-1 flex flex-col gap-2">
            <h1 className="text-3xl font-bold mb-4">Detail Page</h1>
            <p>This is the detail page content.</p>
            <p>ISBN: 123456789</p>
            <p>Rating: ★★★★☆</p>

            <div className="flex gap-2 mt-4">
              <button className="px-4 py-2 bg-blue-500 text-white rounded">Buy</button>
              <button className="px-4 py-2 border bg-blue-500 rounded text-white">Favorite</button>
            </div>
          </div>
        </div>

        {/* Описание */}
        <div className="w-[80%] pt-[50px] pl-[50px]">
          <h1 className="text-xl font-semibold">Описание</h1>
          <p className="mt-2">Тут будет описание товара...</p>
        </div>

        {/* Комментарии */}
        <div className="w-[80%] pt-[50px] pl-[50px]">
          <h1 className="text-xl font-semibold">Comments</h1>
        </div>
      </div>
    </>
  );
}

export default DetailPage;
