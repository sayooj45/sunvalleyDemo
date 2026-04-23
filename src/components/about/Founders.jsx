import React from "react";

const Founders = () => {
  return (
    <section className="px-6 md:px-16 py-16">
      <p className="text-xs tracking-widest text-yellow-600 mb-4 uppercase">
        The People Behind Sun Valley
      </p>

      <h2 className="font-serif text-3xl mb-10 text-greenDark">
        Meet the Founders
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-cream p-6 flex gap-4 rounded">
          <div className="w-16 h-16 bg-green-700 text-white flex items-center justify-center rounded-full text-xl">
            S
          </div>
          <div>
            <h3 className="font-serif text-xl">Shyma</h3>
            <p className="text-xs uppercase tracking-widest text-yellow-600 mb-2">
              Co-Founder & Host
            </p>
            <p className="text-sm text-gray-600">
              The heart of hospitality. She ensures every stay feels like home.
            </p>
          </div>
        </div>

        <div className="bg-cream p-6 flex gap-4 rounded">
          <div className="w-16 h-16 bg-yellow-600 text-white flex items-center justify-center rounded-full text-xl">
            D
          </div>
          <div>
            <h3 className="font-serif text-xl">Dhinesh</h3>
            <p className="text-xs uppercase tracking-widest text-yellow-600 mb-2">
              Co-Founder & Farm Lead
            </p>
            <p className="text-sm text-gray-600">
              Leads sustainable farming and community partnerships.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founders;
