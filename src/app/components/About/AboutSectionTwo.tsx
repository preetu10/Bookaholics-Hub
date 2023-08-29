/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import SectionTitle from "../SectionTitle";
const AboutSectionTwo = () => {
  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28 pb-10">
      <div className="container flex items-center justify-center">
       <SectionTitle
                title="Amazing Features of Bookaholics' Hub"
                paragraph=""
                mb="25px"
              /> 
        </div>
        <div className="grid lg:grid-cols-2">
              <div className="my-8 mx-28   text-slate-50  text-2xl">
                <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 20 20" 
                fill="currentColor" 
                className="w-7 h-7 mr-2">
              <path d="M10 9a3 3 0 100-6 3 3 0 000 6zM6 8a2 2 0 11-4 0 2 2 0 014 0zM1.49 15.326a.78.78 0 01-.358-.442 3 3 0 014.308-3.516 6.484 6.484 0 00-1.905 3.959c-.023.222-.014.442.025.654a4.97 4.97 0 01-2.07-.655zM16.44 15.98a4.97 4.97 0 002.07-.654.78.78 0 00.357-.442 3 3 0 00-4.308-3.517 6.484 6.484 0 011.907 3.96 2.32 2.32 0 01-.026.654zM18 8a2 2 0 11-4 0 2 2 0 014 0zM5.304 16.19a.844.844 0 01-.277-.71 5 5 0 019.947 0 .843.843 0 01-.277.71A6.975 6.975 0 0110 18a6.974 6.974 0 01-4.696-1.81z" />
              </svg>
                  <h3 className="font-bold"> User Community</h3> 
                </div>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed ">
                Registered users can safely purchase, sell, exchange, and borrow books from one another while also getting the best prices on the books they want.
                </p>
              </div>
              <div className="my-8 mx-28   text-slate-50 text-2xl">
                <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 20 20" 
                fill="currentColor" 
                className="w-7 h-7 mr-2">
                <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
                </svg>
                <h3 className="font-bold">Search of Books via Image</h3> 
                </div>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed ">
                  Users can search their desired books via image of cover page of those books.
                </p>
              </div>
              <div className="my-8 mx-28  text-slate-50 text-2xl">
                <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 20 28" 
                fill="currentColor" 
                className="w-7 h-15 mr-2">
                <path fillRule="evenodd" d="M1 4a1 1 0 011-1h16a1 1 0 011 1v8a1 1 0 01-1 1H2a1 1 0 01-1-1V4zm12 4a3 3 0 11-6 0 3 3 0 016 0zM4 9a1 1 0 100-2 1 1 0 000 2zm13-1a1 1 0 11-2 0 1 1 0 012 0zM1.75 14.5a.75.75 0 000 1.5c4.417 0 8.693.603 12.749 1.73 1.111.309 2.251-.512 2.251-1.696v-.784a.75.75 0 00-1.5 0v.784a.272.272 0 01-.35.25A49.043 49.043 0 001.75 14.5z" clipRule="evenodd" />
                </svg>
                <h3 className="font-bold">Incredible Business Opportunity for Publishers</h3> 
                </div>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed ">
                Registered publishers can make money by selling their books on our platform.
                </p>
              </div>
              <div className="my-8 mx-28    text-slate-50 text-2xl">
                <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 21 21" 
                strokeWidth="1.5" 
                stroke="currentColor" 
                className="w-7 h-7 mr-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>

                <h3 className="font-bold">Extensive Collection of Different Books</h3> 
                </div>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed ">
                Numerous publishers as well as readers who wish to exchange, sell, or borrow books gather here to create a massive collection of books of all kinds.
                </p>
              </div>
              <div className="my-8 mx-28  text-slate-50 text-2xl">
                <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg"
                fill="none" 
                viewBox="0 0 20 20" 
                strokeWidth="1.5" 
                stroke="currentColor" 
                className="w-7 h-7 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
                </svg>
                <h3 className="font-bold">Notification System as Reminder</h3> 
                </div>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed ">
                  When a user borrow book from another user, the notification is sent to that user as reminder who borrowed book to return the book at time.
                </p>
              </div>
              <div className="my-8 mx-28  text-slate-50 text-2xl">
                <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 21 21" 
                strokeWidth="1.5" 
                stroke="currentColor" 
                className="w-7 h-7 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                </svg>
                <h3 className="font-bold">Monthly Quiz Competition</h3>
                </div> 
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed ">
                 Monthly quiz competition is arranged in our platform to encourage readers to enhance their knowledge by reading books.
                </p>
              </div>
      </div>
    </section> 
  );
};

export default AboutSectionTwo;
