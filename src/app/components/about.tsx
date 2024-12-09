import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="py-20 lg:px-20 px-6 font-sans text-[#151875]">

      {/* hero section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 items-center">
        <div className="pl-80">
          <Image
            src="/aboutpic1.png"
            alt="Ecommerce Meeting"
            width={500}
            height={500}
            className="rounded-lg shadow-md flex flex-row"
          />
        </div>
        <div className="m-0 p-0">
          <h2 className="text-4xl font-bold mb-6 flex-row">
            Know About Our Ecommerce Business, History
          </h2>
          <p className="text-gray-600 mb-6 text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quidem quam facere hic libero explicabo perferendis ullam alias ratione incidunt! Itaque quo, quaerat blanditiis molestias provident neque libero tempore officia.

          </p>
          <Link href="/contact" target="_blank">
            <button className="px-6 py-2 bg-pink-500 text-white font-semibold rounded-md shadow-md hover:bg-pink-600">
              Contact Us
            </button>
          </Link>
        </div>
      </section >

      {/* features section */}
      <section className="my-16 text-center mx-20">
        <h2 className="text-3xl font-bold mb-8">
          Our Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: "/free-delivery 1.png", title: "Free Delivery" },
            { icon: "/cashback 1.png", title: "100% Cash Back" },
            { icon: "/premium-quality 1.png", title: "Quality Product" },
            { icon: "/24-hours-support 1.png", title: "24/7 Support" },
          ].map((feature, index) => (
            <div
              key={index}
              className="p-6 px-16 w-72 h-64 border rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <Image
                src={feature.icon}
                alt={feature.title}
                width={60}
                height={60}
                className="mb-4 mx-auto"
              />
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* client section */}
      <section className="my-16 text-center">
        <h2 className="text-4xl font-bold mb-8 text-gray-900">Our Client Say!</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { name: "Selina Gomez", image: "/Group 200.png" },
            { name: "John Doe", image: "/Mask Group.png" },
            { name: "Emma Watson", image: "/Mask Group (2).png" },
          ].map((client, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={client.image}
                alt={client.name}
                width={500}
                height={500}
                className="w-24 h-24 rounded-full object-cover shadow-md mb-4"
              />
              <p className="text-[#151875] font-semibold">{client.name}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non odio
          eleifend nisl sollicitudin aliquet ut non felis.
        </p>
      </section>
    </div>
  )
}
