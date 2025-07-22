import React from 'react';

const MeetOurFarmers = () => {
  const farmers = [
    {
      id: 1,
      name: "Gaurav Taneja",
      title: "Director",
      image: "https://images.bhaskarassets.com/webp/thumb/512x0/web2images/1884/2025/03/29/gt_1743224630.jpg"
    },
    {
      id: 2,
      name: "Ankur Tyagi",
      title: "CEO and co-founder",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRASpWD0CymUd8JMGc44bIrAOPZYgbD1xvJIA&s"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet Our Teams
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            It's at the farm, in the store and on your table. Dairy is feeding people today for whatever comes tomorrow.
          </p>
        </div>

        {/* Farmers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {farmers.map((farmer) => (
            <div
              key={farmer.id}
              className="text-center group perspective-1000 hover:[transform:rotateY(10deg)_rotateX(5deg)] transition-transform duration-300"
            >
              {/* Profile Image */}
              <div className="relative mb-4 mx-auto">
                <div className="w-48 h-48 md:w-56 md:h-56 mx-auto rounded-full overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <img
                    src={farmer.image}
                    alt={`${farmer.name} - ${farmer.title}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Farmer Info */}
              <div className="space-y-2">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                  {farmer.name}
                </h3>
                <p className="text-base md:text-lg text-green-600 font-medium">
                  {farmer.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetOurFarmers;