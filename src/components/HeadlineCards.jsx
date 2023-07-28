import React from "react";

const Card = ({ heading, src }) => {
  return (
    <div className="rounded-xl relative ">
      {/* overlay */}
      <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
        <p className="font-bold text-2xl px-2 pt-4">{heading}</p>
        <p className="px-2">Through 24/7</p>
        <button className="border-white text-black bg-white mx-2 absolute bottom-4">
          Order Now
        </button>
      </div>
      <img
        className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
        src={src}
        alt="/"
      />
    </div>
  );
};
function HeadlineCards() {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      {/* Card */}
      <Card
        heading="Salad"
        src="https://images.unsplash.com/photo-1534482421-64566f976cfa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VzaGklMjBmb29kfGVufDB8fDB8fHww&w=1000&q=80"
      />
      <Card
        heading="sushi"
        src="https://diatribe.org/sites/default/files/Sushi-Hero-iStock-1286622470.jpg"
      />
      <Card heading="stake" src="https://www.gurmania.ge/gallery/igvino.jpg" />
    </div>
  );
}

export default HeadlineCards;
