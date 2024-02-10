import Degree from "./Degree"

export default function Qualification() {

  const data = [
    { degree : "Secondary School",university : "KL Mehta Dayanand School,",city : "Faridabad",from : "2017",to : "2018"},
    { degree : "Senior Secondary School",university : "KL Mehta Dayanand School,",city : "Faridabad",from : "2019",to : "2020"},
    { degree : "Btech Computer Engg",university : "JC Bose University,",city : "Faridabad",from : "2021",to : "present"},
  ]

  return (
    <section className="h-screen bg-white">
      <div className="flex flex-col items-center">
        <div id="heading" className="mt-[100px]">
          <div id="Heading" className="flex flex-col items-center">
              <h2 className="text-4xl font-semibold">Qualifications</h2>
              <span className="text-gray-400 ">My Educational Qualifications</span>
          </div>
        </div>

        <div className="mx-auto mt-[50px] mb-2">
          { 
            data.map((details, index) => {
                return (index === 1) && <Degree 
                key={details.degree}
                degree={details.degree}
                university={details.university}
                city={details.city}
                from={details.from}
                to={details.to}
            />
            })
          }
        </div>

        <div className="w-full relative">
          <div className="w-8/12 flex justify-between mx-auto">
            <div className="h-3 w-3 rounded-full bg-[--color-purple-dark]"></div>
            <div className="h-3 w-3 rounded-full bg-[--color-purple-dark]"></div>
            <div className="h-3 w-3 rounded-full bg-[--color-purple-dark]"></div>
          </div>
          <div className="w-8/12 h-[2px] ml-[16.6667%] bg-[--color-purple-dark] rounded-md self-end bottom-[5px] absolute"></div>
        </div>

        <div className="w-9/12 flex justify-between mx-auto mt-2">
          { 
            data.map((details, index) => {
                return (index === 0 || index === 2) && <Degree 
                key={details.degree}
                degree={details.degree}
                university={details.university}
                city={details.city}
                from={details.from}
                to={details.to}
            />
            })
          }
        </div>
      </div>
    </section>
  )
}