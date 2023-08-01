import React from "react";

const History = () => {
  return (
    <div>
      <div
        className="h-[400px] flex place-items-center justify-center bg-no-repeat bg-cover"
        style={{
          backgroundImage:
            'url("https://itec.it/wp-content/uploads/2022/01/storia-scaled-e1643364674276.jpg")',
        }}
      >
        <p className="text-6xl text-center text-white font-extrabold font-poppins tracking-wider">
          History
        </p>
      </div>
      <section className="w-full flex flex-col lg:flex-row lg:px-44 py-20 bg-blue-50 mx-auto border-2 border-gray-300 mt-1">
        <div className="w-full lg:w-4/5 order-1 lg:px-10">
          <p className="text-5xl font-extrabold pt-5 lg:pt-0">
            ITEC, An European Leader For Quality And Expertise.
          </p>
          <p className="py-10 font-poppins font-semibold">
            - ITEC Srl. (Industria Tecnologica) as the name means was started in
            order to serve the Industry by manufacturing and selling the
            mechanical pressure and temperature gauges. The company was founded
            by Mr. Enzo Del-Conte in 1989 (who having almost more than 45 years
            experience in this field) at via Battisti in Invorio about 50 miles
            away from Milan, Italy and a 100% family owned company. In the
            beginning, the manufacturing of differential pressure gauges,
            diaphragm pressure gauges, overload protector and diaphragm seals
            started.
            <br />
            <br />- ITEC Srl. (Industria Tecnologica) as the name means was
            started in order to serve the Industry by manufacturing and selling
            the mechanical pressure and temperature gauges. The company was
            founded by Mr. Enzo Del-Conte in 1989 (who having almost more than
            45 years experience in this field) at via Battisti in Invorio about
            50 miles away from Milan, Italy and a 100% family owned company. In
            the beginning, the manufacturing of differential pressure gauges,
            diaphragm pressure gauges, overload protector and diaphragm seals
            started.
          </p>
        </div>
        <div className="w-full lg:w-2/3">
          <img
            src="https://itec.it/wp-content/uploads/2022/01/immagine-azienda-contattaci.jpeg"
            alt=""
          />
        </div>
      </section>

      <section className="w-5/6 lg:w-2/3 mx-auto text-gray-700">
        <p>
          These products find a greater demand and market in Oil & Gas, Chemical
          and Petrochemical industries as they were flourishing and expanding
          the operations worldwide. The stainless steel gauge, gas filled
          thermometers & bi-metal thermometers were added in to manufacturing in
          1990s' to enable to serve the market in a wider manner.
        </p>
        <br />
        <p>
          Quality was always the key concern for ITEC and got certified for ISO
          9001 in 1998. The ATEX certification as part of the product innovation
          and meeting the EU regulations for specific industries has done in the
          2000s'. Technical expertise is always a plus point for ITEC. With
          sales increasing, the need to have the vendor registration with major
          oil & gas, Chemical & Petrochemical become a necessity, hence ITEC
          started the process of vendor listing with various worldwide oil & gas
          firms in 2000s' and listed as well and going on as a continuous.
        </p>
        <br />
        <p>
          In 2011, ITEC expanded its operation into India with JV forming with
          the Bhimani family to set-up ITEC Measures Pvt. Ltd. This enabled ITEC
          to expand its product portfolio with RTD/Thermocouples/Thermowells,
          Pressure/Temperature switches and Level Switches/Instruments. The
          manufacturing plant is located in Vapi, Gujarat almost 150 km from
          heart of Mumbai. The firm as like its Italian counterpart also an ISO
          9001: 2008 company. The factory set-up has a total built-up area of
          25,000sqm. with most modern CNCs and testing facilities for the
          machining and testing of the in house manufactured instrument. As part
          of the continuous improvement derivatives, the management of ITEC has
          decided in perusing the ISO 14001 & OHSAS 45001 certifications to have
          the Integrated Management Systems in place to comply with norms of its
          customers and has been received from TUV Nord in 2014.
        </p>
        <br />
        <p>
          Customization is one of the principles ITEC believes in. This drives
          us to develop many innovative designs during our 25 years of span in
          the industry. Some of them are: the diaphragm seals for very low
          pressure applications, external zero adjustment facility in pressure
          gauges , differential pressure instruments, which helps our customer
          the easy correction of reading in filled case gauges, differential
          pressure measurement up to 40 bar and differential pressure gauges
          with static up to 400 bar also applied on single side.
        </p>
        <br />
        <p>
          In 1990s' ITEC started offering the OEM services to some of the major
          industries across Europe. These services include tailor-made product
          solutions and private labeling of the standard product it manufacture.
          ITEC engineering teams (Italy & India) work hand-in-hand to meet the
          customization of the product and come out with most economic and
          technically compatible solution for the OEM industries, such as the
          bayonet type thermocouple or for the bearing temperature RTDs for the
          power generators or the gold plated diaphragm seals for the Petroleum
          industry. And in the end, as our tagline, we are ITEC… measuring with
          you
        </p>
      </section>
    </div>
  );
};

export default History;
