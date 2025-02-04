import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { useUser } from "../context/UserContext";

const Home = () => {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const upcomingEvents = [
    {
      id: 1,
      title: "Tech Innovators Summit",
      date: "Dec 10, 2024",
      description: "Explore the latest in technology and innovation.",
      image:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUQERIWFhUXFRgXGBgWFxUVFhYWFxYXGBYWFRUYHSggGBslGxcXITEhJSkrLi4uGiIzODMsNygvLisBCgoKDg0OGxAQGy0lICUtMDI1LS8tKy8tLTctLSs1KzEvNS8vLSsvOC0rLS0vLS0vLS01LS0tLS0tLy0rKy0tL//AABEIAMkA+wMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABQIDBAYHAQj/xABLEAABAwIDBQUCBwwIBwEAAAABAAIDBBEFEiEGEzFBUQciYYGRcaEUFSMyUsHSQkNUY3KCkqKxstHhFkRTYnN0wvAzNDWTo7O0Jf/EABoBAQADAQEBAAAAAAAAAAAAAAABAgQDBQb/xAAqEQACAgICAQIFBAMAAAAAAAAAAQIRAxIhMQQTQSJRYXHwBZGx0RRCof/aAAwDAQACEQMRAD8A7iiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCLwlW3S9EBdVt0oWNVzFrHOAzEAkN6kclC/Hkv4K71P2VZIq5GwGUpvCtf8AjyX8Fd6n7KfHkv4K71P2VOpGyNhEpVxrrrWvjyX8Fd6n7K9bjsw/qrvU/ZUajZGzItd/pDL+Cu9XfYT+kMv4K71d9hRqydkbEi13+kMv4K71d9hZ+E4k+YuD4THa2pJN78tQEoKSZJoiKCwREQBERAEREAXhK9Kx3uugK3S9FSZCqEVqIKs56pvD1VKJRBcEpXolVpEokyN4OqZx1WOiihZfMoVBlVtFNA9JXiKl7w0XcQB1JsPehAk4H2LDcbalZknA+xR0sL3kBoJHu9VJDKBXMziPN3jwFjr5rJXlFhOR5ldYuIsOeUW18yrzmd+3UoFfuWkWU2Ad8HWw09LoyIDIevH0UWTRjtYTqBwXrYXHUBZYH/E/3yVdJ8wf75pYowjA7oVkYfz8lkv4H2LGw/n5KLFcmWiIoLBERAEREAREQFEp0VhXp+CsqUQwiIpICIiAIiIAiIgCIiALRu0vY84huHb/AHbY8wLS3O0l1rOAzCzrAi/QreVH41VQxx3mlbGL6Fx1JHJreLvJHvXwdloa7Lbo512cYdUUdfPRue90Apy5l7iN1nR2c1lyGnvObp0K6ZBNl9ihY62GmJdUZYnyjIHOFrhhJyGS2gBffXqVnyVAFragi4IOhHgohKU4qTXZOWKhNxRJurRyGvisVr9cx63WJ8K8PeslTRzuy/v+Pjx0/mm+4a8OGn81iSO5Zreiov8AjB6BTQszt/8AO8fDwt1VcFSGgAg+5R1/xg9Al/xg9AlCyUdWC3A+5eYfz8lGg/3x6BSVBz8lDVEp2ZaIiqWCIiAIiIAiIgKJRouR7YdplTFXGgoYYnljhGTIHOL5CASGhrm5QL2uehXXiFwHB4w3G66OWL5QTVErHkm7Wuebd3gQ5kgN1eLSi5VdImEN5qN9nVtksdkqWvZURtiqIi3O1rszC14JZIw8cps4WPNpU+tR2OqIpKioMb2ucyOJr8pvbvSloJHP52nituVYu0my2WChNxQREUnILRNve0VlA800Ue8nyB13G0cebhmtq421sLcRqt7XJ+2PZKSR7a+nY55IEcrGNLnaXySADU6d0+xvirwq+SJXXBk9mO0WIVtVJLUOvTmMi2QNjEgLQ0Rc7/OvqfHkunrUdh6ZzIIAYBC4Nu9jRYNJvckcieJ8StuXKOTdt0dcmP06V+wREVjmYmK1oghkmdwYwut1PIeZsPNfP9RVySVJkleXvN+84km3GzegHIcF1ntQqy2mZEPvkgv+SwZv3sq5KabvZ3Otz04C3ivT8PH8O31Ocnyde7TsElq2xMgy3bnvmOUWdltb9ErmuC4zLhtQ6nkOaNrssjGm4B+lHfnr5+9ddjxHesjmflaJI2vHeFrOaHaHnxWpYHgMFdHVumbcurp8j26PaAGNBa7ppw4LLhy/C4zXCLzjTJKr2lpY42yunaWuF2hvec4eDRr68Fj7O7bGsqTBFA5sYYTvHakEWtmA0aCL8zrZR+F9l8bXl1RMZGg91rBkzD++65PkLe1b1RUUcLBHDG1jRyaLD2nqfEqs/TSpckRtOyKxvaSmpDkmfeQjNlDS51uAJsLN4HjbgvMB2jhrMwh+c3UtcMrrdbcCPYvcfwiOYSMcLb1oBPMFnzSPELj1Liz6Koc+MBzonvYQbhr2glrhobi9tOht0Xn+s1PX2N68aM8ey7O8WP0Qlj9EK1QvZLGyZly17GvbqeDgCP2q9uR4+pWowUzyx+iFI4fz8lH7kePqVIUHPyUMlGWiIqlwiIgCIiAIiwMbrHR08skZbnbG5zcx7uYA2zW5XUpW6Ber6wRNzHU8AOpWoVjoppN9LG0StBa17W97KeLC7mL66qiommLNXiWUNtd/caXeIY3ui/QcFQYH5Q5w72lw2/G2tr8rrfHBjjBrIbMUFHl9mVgc7GEiGJjC/WQta0Fzm6BxI4n2qY+FP6+4fwUJgsJbmzAjU2vpoTmUqx9jcEaLNn1Uqh0Z89b8F81L+vuH8FkUcjnXuf2LBfJc3JUftdiElPh800LrSDLY8wHSMYSPHKSucVs0jizZ1r8+JPdcAgA9AOHtXFDj9Te+/kv+W/8Abe6z6HGJrBwlf7C4ke9V839K8jOksOTX91f7Hbx8+ODucbOr09W9l8p49bFS2HYhn7rrB3Lof5rTdnMSM8V3fOabHx8VPmkcGte030B0Oo8l8rhyeZ4uaUHb07Xf59z08sMOSKfV9M2B7wBckAeKxoKgvd3bZBz6+xRMUT5jdztOrjw9gU3TRtY0NB9TzXteN5OXyZba6w+b7ZgyY4YlV3L+Dysoo5Rllja8XvZ7Q4X6i64BtdTtOJVLGABu+EbWgWa0BrG2a3gNbnzX0JnHUeq+b9pGyGsrSWu/5mcjuu1G8dlI01BFl7niPlmKZ0XtyOlILaDfH3RfzVjswwp1RRbxrwPlpBYg6WItw8CFznAWyvbLTFkji5okjBDj8rECcrfF0ZkFuZDQutdkMD4KOZssb2E1TnNa9pY4tMUOoDraXDh5FWyrTFrfRC+JkhU4I+MjO8ZT90LkD8ocQr8ezrnC7ZmEdRcqedWsI1BN+ItfyK0GsDo53mCSVgPIEgnna7eIWHHK3VlfMyRwxTceyUxCl+DEZpQ52hyNvcjx6D2rmu12HsD5J2DLnfmLLkgZySbE68dfPktzxClmZC6qe02uBd5OZxcQAddfMrWcRpzNGWk2cbG/IEG9vqV5YlKLdcmLD5+WOaNvWF9fT5m5bHbPvfQ07xIADGLA34XNvdZTP9GJP7Rvo5WcCf8AF+EseXbwtjLxfQF0jyWsHgHPA8lynFdpah8hkMz8173DnC3gwA2aB4LtgwSnG26PRnq5Nr3Out2YkP31vo5S+BYO6AuLnh2YAaX0tfqqsEbIKeETOLpN0zOTxL8ozE+alWOuFwk30TGKKkRFQuEREAREQHhCiqvA4sj8jLPynKbuNnWNjYm3FSyokfZAcHxLHqmOkp5BJaSQOeXZWat4jTLbmOXJX8D2rZuY3VVSA9zQTZrLnU3JDW6eitdpIayWGFnzWRm3sLiB+6ufTURHzdR7x/FepihFx2pc3/JRZNH1Z1/CdqaEyDe1jcgJvfu3FtBo2979FkV3aFg8d8ollt/ZskHoZC264eRbjorZk6JkwY27fH2Illcn1R9U0VFTSxsljAcx7Q5rg51i1wuDxWLtDs/FJSzxsZ3jE/Lq494C7dL9QFo/YbtHnY/D3nVl5Ir/AECflGeTiD+cei6ssMo6SJTtHzADfVZ2Gv4t8x9aydq8N+DVk8FrBryW/kP7zLeRA8lFMcQQRyXrQl00cjfNjqvK9zDwIB+o/UumUWGxPY1xbckam7uvgVwllfpdr3Ruta44j2LYNldvqikG6lc2pivpmJjlZfUgOsQ4eBt7eS8rN+mv/Ll5MGqkkq+vH9Gt+QnhjjfaZ134oh+h+s7+KfE8P0P1nfxUfs/tfS1lhG/LIfvclg6/RpBLXfmkqeXOUXF00crMH4oh+h+s7+K4btxtRV09fUwQT5I45MrW5I3WGRp4uaSdSeJX0AvmXtLP/wClWn8af3Grv48VJu17FZtmbie1OIRFgNQe/BBKPk4fvsTXn7j6Rcuz7HUzKihpp5RmfJCxz3XIu4t7xsCANb8FyTtbw/c1NMLafAYW+cedp91l1jsvkzYXS+DC39GR4+pWzRj6aaREW7ZL1GERZHZWWOU21cdbac1j4LQxviY9ze91u7kTY2B6WUy9wAJcQABck6AAcSTyC0bE9vIaFrIxFJO6QF8e6y5CzSxLyeHsB0IWaMHJ0kXs2HbGDPRzjmGZ/wBAh/7AVymGe+izsT7SMQmBbDBBTtNxd5Mz7HpoG+rSoT48r7W+FNj/AMKCBp9cq3Y/GyJcow+TgWWSdm4bU1+XB4BzdJlt4MMlveGrQ9k8N+E1kENrgyAu/IZ3n39oBHmvMZxeaZkcMszpd3nIc83cS92Y3PPkB0AAW8djWE6zVjhw+RZ7nSEfqC/tXRr0sbv8s0QjSUfkdRVyF3JW16CvMO5kogRVJCIiAIiICl7rBY0j7AnoCVdmKxK91o3Hwt66fWpRDON9pmHPZLFUm5ZJHlB5BzHOu2/iCCPPotMX0oylY+ERyMa9paLtc0Oab66g6FQ1TsPh7rn4Kwafcl7B6NIC24vJUYpNHNx5PnvEI8zD14+mqhB6/wAOvsX0ZsZsnRPoqaaSmje+SCNzy8F4c5zQScriR7lNVuytM6lnpYaeGETRuYd3GxmrhYE5QL2Nj5JlzrbhBRPnDZrFn0lRFVMv8m8EgfdN4PZ5tJHmF9TUtQ2RjZYyHMe0PaRwLXAFpHkVwXsgw6GplqqGriDrxtkDXXGSWF5YSCOB+VseoFl0LBMRxIMEEOHtjawZBvXZI2BugDbAOc3TS11TM9qpde/BfHC03ZhdsGAlzWV0YvkG7lt9C92P9gJIP5Q6Lla+loYnOiDKgMc5zSHhoJjN9CAHakW6rVZ+zOgcSQ2Vl+TZDYezMCr4fIUY6yKyicTRdTd2c0nwwU+ecM+DmX5zM2YSBlr5OFiub9oOHOoKx9Mw3Zka+NzrFxa4W7xFgSHtcOHJaFng3SKNURNfKQAGkg3BuDYgt1BBHAg21X0pspiRqaOnqD86SFhd+Xaz/wBYFci7QMFhOG0FfSxhjC0CQDX/AIrQ4FzjqSHtc3X6QW5diVdvMOMR4wzPZ5OtIP3yPJcM7U4KS+ZaPDo6Avm/bKn3uMzRf2lYyP8ATcxv1r6QXBTT7zaXIR/Xc3/bbvP9K5eO62f0Jl7Ev2/QfK0kluLJm39joyP3itu7HZL4VD4PmH/mefrUV27UpdRwyj73UAHwa9jx+8GrL7Epb4bl+jUSD1DHf6laTvAvv/ZH+xl9rFPPLRbmmIu94ztvZz42gktaeHzsuh4jRc4x5sgo8PJDmvEb4XNIIcCwN4jiLCNy6viN55923gO77LfOPr+wK5Hh8b52bxocY3FzCeTgC248iVlw+S4yquEzXl8dRgnfP5RwIuJ4knzVK+gajYvD3m5pIx+SCz3MIUHiOxlCyppGNpxlkfKHgukIcGwuc3i7qAV6K8qL9mY9WcioKN80jYYm5nvNmgftPQDiTyC+h9n8KbS08dOzUMbYn6Tjq53m4kqvDcIp6e4ggjjvxLGgE+13E+azVmzZvU4XRaMaCIizljIZwCqVMfAKpVLBERAEREBamCjsWPydupA+v6lKSNuFG1tO92Xu6B1zz4KSGZIFtEfwPsKtlzunuKh55667g1lPlubXfLe3K9mcVeMbKtnuwv8A06j/AMtF+4FOLU8Ip66ngip2CmIijawEvluQ0WBNmcVMiWewvkvbWxJF+drq2SPLZGxoGE7MT0u0MlQxjRTS7x2YuaL71mZzQ3jfej0XUlpWPbPVFRM2dlQ6JwYGWaA5pALiLgm33RWdhVLWxXEtSZhyu1jS3zB181DTfNr/AKXbhqmuzZ0UOXz/AO8qw67EJYrFzZHX/s2GTh1yg281Ci3wim5kn/qQ/wAk7/3tWmdumAmWnjrGNu6B2V9hc7qS2v5rw3ycVnnFJfhQn3VRl3BjvuH3uZA61rcLBZlbLNV080LBI0uYW/KxujHe8SNefBdtJRabI2T4Nf2Ew19bs/JRvYQbzNiLgQCQ7eRubfiBISPIhYXYJO4Pq4XNIGWN9iCLOBe1wPjqPRSOCYBitI3LDNFluSY3XcwHqDlvr4WVyn2bxCOeSojlYx73OJIJs7M7MQ5pFrX9q61GpR2XJfVX2dLXG9lYWzbS1ErHNcyMzSAgggktbF3eti88Oi2rEcAqKyJsdbI/S92wSGON4NrbwfdcD4aq3gOxUNHLv6eN7X5Sy5eXDKbX0J8AuMdYpq+SjfJIdq9O1+F1Ae5rbBr2lxtdzHtcGjq42IA6lQPY6TBhcsriLSVD3Msbm4YyOxHI5oybdNVfxvYVtU9805mkebloklcY4yeAYxpGVvgFgUGxFbDFuIqkMZcusBfU2uQSbjgFPDxOCfP1L43He5dHRMGot2zM757tT4DkFZOlR7T+0KOxGKuc0NhlazSznEAuPD5pvpzVnD8PrBIZJpGO00DRlAN7346rN6NJU1wdfVUtpSfLNtUJjP8AzdB/iT//ADvXtTJVZfkzHm/v5stvzTdRlRSV8kkMrn014i4tsJbEvYWHNr0JXaEfe0cNjbUURQSVeb5cwFtvvbZA6/5xIIUiHu6e5Uaomy8vQFaaX/RWRC08SLKpJeCIiqWCIiAIiIAiIgCIiA8smUdAvUQFO7HQei83Teg9FWiAo3Leg9F5uW9AriIKLe5b0CblvQK4iCi3uG9Am4b0CuIgot7hvQJuW9AriIKLe5b0CblvQeiuIgoo3Teg9E3Y6D0VaICnIOgXtl6iAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiA//Z", // Real URL
    },
    {
      id: 2,
      title: "Cultural Extravaganza",
      date: "Jan 5, 2025",
      description: "Experience a night of vibrant cultural performances.",
      image:
        "data:image/jpeg;base64,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", // Real URL
    },
    {
      id: 3,
      title: "Startup Expo 2025",
      date: "Feb 15, 2025",
      description: "Showcase your startup and connect with investors.",
      image:
        "data:image/jpeg;base64,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", // Real URL
    },
    {
      id: 4,
      title: "Art & Design Week",
      date: "Mar 20, 2025",
      description: "Discover creative works from artists and designers.",
      image:
        "data:image/jpeg;base64,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", // Real URL
    },
  ];

  const { user } = useUser();

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center text-white text-center py-40"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
      >
        {/* Blurred background image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "inherit",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(5px)", // Stronger blur effect
            zIndex: "-1",
          }}
        ></div>

        {/* Overlay for better text contrast */}
        <div className="absolute inset-0 bg-black opacity-30"></div>

        {/* Text content */}
        <div className="relative z-10">
          <h1 className="text-5xl font-bold leading-tight mb-4">
            Welcome to Event Pulse
          </h1>
          <p className="text-xl mb-6">
            Simplifying event management with innovative technology. Plan,
            manage, and execute events like never before.
          </p>
          <Link to="/getStarted">
            <button className="bg-teal-500 hover:bg-teal-600 text-white py-3 px-8 rounded-lg text-lg transition">
              Get Started
            </button>
          </Link>
        </div>
      </section>

      {/* Create Event Section */} 
      {user?.role === "Organizer" && (
        <section className="py-16 text-teal-700 bg-gray-100">
          <div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Create an Event That Excites?
            </h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              Whether you're hosting a small meetup, a grand conference, or a
              unique event, let your ideas shine! Get started by creating your
              event and inspire the world.
            </p>
            <div className="relative mb-8">
              <img
                src="https://canapii.com/wp-content/uploads/2023/03/Blog-banner-5-C-of-event-management.png" // Replace with your own image
                alt="Event Creation"
                className="rounded-lg object-cover w-full h-72"
              />
              <div className="absolute inset-0 bg-black opacity-25 rounded-lg"></div>
            </div>
            <Link
              className="bg-teal-500 text-white py-3 px-8 rounded-lg font-semibold hover:bg-teal-700 transition duration-300 shadow-lg"
              to="/createEvent"
            >
              Let's Create Your Event!
            </Link>
          </div>
        </section>
      )}

      {/* Upcoming Events Carousel */}
      <section className="py-16 bg-teal-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-teal-700 mb-8">
            Upcoming Events
          </h2>
          <Slider {...carouselSettings}>
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="p-6 bg-white rounded-lg shadow-lg text-center"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-64 object-cover mb-4 rounded-lg"
                />
                <h3 className="text-xl font-bold text-teal-700 mb-2">
                  {event.title}
                </h3>
                <p className="text-gray-600 mb-4">{event.date}</p>
                <p className="text-gray-700 mb-4">{event.description}</p>
                <div className="flex gap-2 w-full">
                  <Link
                    to={`/register/${event.id}/${event.title}`}
                    className="w-1/2"
                  >
                    <button className="bg-teal-500 hover:bg-teal-600 text-white py-2 w-full rounded-lg text-sm transition">
                      Register for Event
                    </button>
                  </Link>
                  <Link to={`/register/${event.id}`} className="w-1/2">
                    <button className="bg-teal-500 hover:bg-teal-600 text-white py-2 w-full rounded-lg text-sm transition">
                      View Event Details
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 bg-teal-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-teal-700 mb-8">
            Key Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-teal-600 p-6 rounded-lg shadow-lg text-center">
              <img
                src="https://leadershipinfo.home.blog/wp-content/uploads/2019/02/group-business-people-meeting-planning-41699625.jpg" // Real URL
                alt="Seamless Planning"
                className="w-32 h-32 mx-auto mb-4 rounded-full"
              />
              <h3 className="text-xl font-semibold text-white mb-4">
                Seamless Planning
              </h3>
              <p className="text-gray-700">
                Easily plan every aspect of your event with our intuitive
                platform.
              </p>
            </div>
            <div className="bg-teal-600 p-6 rounded-lg shadow-lg text-center">
              <img
                src="https://imageio.forbes.com/specials-images/imageserve/65fb34a45e253140736dc172/People-searching-for-creative-solutions--Teamwork-business-concept--Modern-vector/960x0.jpg?format=jpg&width=960" // Real URL
                alt="Real-Time Collaboration"
                className="w-32 h-32 mx-auto mb-4 rounded-full object-cover"
              />
              <h3 className="text-xl font-semibold text-white mb-4">
                Real-Time Collaboration
              </h3>
              <p className="text-gray-700">
                Collaborate with your team and vendors seamlessly, all in
                real-time.
              </p>
            </div>
            <div className="bg-teal-600 p-6 rounded-lg shadow-lg text-center">
              <img
                src="https://www.soundandcommunications.com/wp-content/uploads/2019/11/Data-Ana.jpg" // Real URL
                alt="Analytics & Reporting"
                className="w-32 h-32 mx-auto mb-4 rounded-full object-cover"
              />
              <h3 className="text-xl font-semibold text-white mb-4">
                Analytics & Reporting
              </h3>
              <p className="text-gray-700">
                Get detailed insights on your event's performance with built-in
                analytics tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-teal-100 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8 text-teal-700">
            What Our Users Say
          </h2>
          <div className="flex justify-center space-x-6">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs text-center">
              <p className="text-gray-700 italic">
                "Event Pulse made managing our conference so easy. The tools
                were intuitive and saved us so much time!"
              </p>
              <p className="mt-4 font-semibold text-teal-700">John D.</p>
              <p className="text-sm text-gray-500">Event Organizer</p>
              <img
                src="https://images.unsplash.com/photo-1521747116043-5bfb8e3f2e47" // Real URL
                alt="John D."
                className="w-20 h-20 rounded-full mx-auto mt-4"
              />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs text-center">
              <p className="text-gray-700 italic">
                "A fantastic platform for event coordination. We were able to
                keep everything on track with ease."
              </p>
              <p className="mt-4 font-semibold text-teal-700">Samantha K.</p>
              <p className="text-sm text-gray-500">Corporate Planner</p>
              <img
                src="https://images.unsplash.com/photo-1518601166159-bd8f86d120b4" // Real URL
                alt="Samantha K."
                className="w-20 h-20 rounded-full mx-auto mt-4"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
