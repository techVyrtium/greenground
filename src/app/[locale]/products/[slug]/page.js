import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

export default async function ProductPage({ params }) {
  const { slug, locale } = params;

  const t = await getTranslations({ locale, namespace: "products" });

  let title, description, price, images;

  try {
    title = t(`${slug}.title`);
    description = t(`${slug}.description`);
    price = t(`${slug}.price`);
    images = t.raw(`${slug}.images`);
  } catch (e) {
    return notFound();
  }

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-bold mb-2">{title}</h1>
      <p className="text-gray-700 mb-4">{description}</p>
      <p className="text-lg font-semibold mb-6">Precio: ${price}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {images.map((src, index) => (
          <div key={index} className="relative w-full h-64">
            <Image
              src={src}
              alt={`${title} ${index + 1}`}
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
