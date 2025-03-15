import Footer from "../../Components/Footer";
import Header from "../../Components/Header";

const Sejarah = () => {
  return (
    <div className="bg-white  min-h-fullscreen text-black tracking-wide ">
      <Header />
      <div className="font-open-sans pt-10 pl-20 max-w-250 text-sm text-gray-500  z-10">
        <div id="sejarah">
          <h1 className="text-black text-4xl/tight pb-6">
            History of the Institution
          </h1>
          <p className="">
            PT. Ever Age Valves Metals was established on November 2, 1998, with
            Mr. Yeh Ming Tsung acting as the current President Director. It is
            located in the industrial area in Sumengko-Wringinanom (Gresik),
            about 30 kilometers from the city of Surabaya with its Tanjung Perak
            Sea Port, one of the busiest ports in Indonesia.
          </p>
          <br />
          <p>
            PT. Ever Age Valves Metals covers the area of 30,000m2, annually
            produces 6,000,000 pcs of plumbing valves which covers more than 30
            lines of products and more than 150 types of its variation. The
            products of PT. Ever Age Valves Metals are mainly for export
            purposes.
          </p>
          <br />
          <p>
            Being certified in ISO 9001 and awarded certifications by several
            certification bodies such as IAPMO Research and Testing, Inc. (for
            compliance to NSF61-8), CSA-CGA and American Society of Sanitary
            Engineering, PT. Ever Age Valves Metals is committed to continuosly
            assure that its products will be delivered in the best of its
            quality.
          </p>
          <br />
          <p>
            PT. Ever Age Valves Metals manufactures products mainly of brass
            and/or bronze material.
          </p>
          <br />
          <p>
            PT. Ever Age Valves Metals is supported with complete and precise
            production equipment and machinery:
          </p>
          <br />
          <ul className="pl-4">
            <li>
              <strong>Casting Department</strong>: The low frequency induction
              melting furnace.
            </li>
            <br />
            <li>
              <strong>Machining Department</strong>: Rotary boring and tapping
              machines, combination machine for drilling and tapping, CNC lathe
              and others.
            </li>
            <br />
            <li>
              <strong>Assembling Departments</strong>: Air pressure equipments
              to test the pressure of air, water and steam.
            </li>
            <br />
            <li>
              <strong>Inspection equipments</strong>: Spectro-lab for metal
              composition analysis, machines for testing tensility and hardness
              and the others.
            </li>
            <br />
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Sejarah;
