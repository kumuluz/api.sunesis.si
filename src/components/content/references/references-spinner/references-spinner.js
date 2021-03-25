import logoAkrapovic from "../../../../../static/images/references/akrapovic_1.png"
import logoOsocial from "../../../../../static/images/references/osocial.png"
import logoEbcont from "../../../../../static/images/references/ebcont.jpg"
import logoCybergrid from "../../../../../static/images/references/cybergrid.jpg"
import logoEveris from "../../../../../static/images/references/everis.jpg"
import logoAbanka from "../../../../../static/images/references/abanka_1.jpg"
import logoPetrol from "../../../../../static/images/references/petrol.jpg"
import logoAdriatic from "../../../../../static/images/references/adriatic-slovenica.jpg"
import logoSnaga from "../../../../../static/images/references/snaga.jpg"
import logoEnergetika from "../../../../../static/images/references/energetika_ljubljana.jpg"
import logoZZZS from "../../../../../static/images/references/zzzs.jpg"
import logoMinPubAdmin from "../../../../../static/images/references/ministry_public_admin.jpg"
import logoMinJust from "../../../../../static/images/references/ministry_justice.jpg"
import logoPBS from "../../../../../static/images/references/pbs.jpg"
import logoMMTurist from "../../../../../static/images/references/mmturist.jpg"
import logoSolvera from "../../../../../static/images/references/solvera_lynx.png"
import logoIRC from "../../../../../static/images/references/irc.jpg"
import logoSRC from "../../../../../static/images/references/src.jpg"
import logoInformatika from "../../../../../static/images/references/informatika.jpg"
import logoHardlab from "../../../../../static/images/references/hardlab.jpg"
import logoTovarna from "../../../../../static/images/references/tovarna_podjemov.jpg"
import logoKneip from "../../../../../static/images/references/kneip.jpg"
import logoChile from "../../../../../static/images/references/chile.jpg"
import logoIBM from "../../../../../static/images/references/ibm.jpg"
import logoOracle from "../../../../../static/images/references/oracle.jpg"
import logoEbrad from "../../../../../static/images/references/ebrad.jpg"
import citytech from "../../../../../static/images/references/citytech.png"
import logoGlobePayroll from "../../../../../static/images/references/globepayroll.png"
import logoPrva from "../../../../../static/images/references/prva.jpg"
import logoSava from "../../../../../static/images/references/sava.jpg"

import React, {Component} from "react"
import Carousel from 'react-multi-carousel'

import '../../../../../node_modules/react-multi-carousel/lib/styles.css';
import "./references-spinner.scss"

export const references = [
  {
    image: logoAkrapovic,
    name: "Akrapovič"
  },
  {
    image: logoOsocial,
    name: "Österreichische Sozialversicherung, Austria"
  },
  {
    image: logoEbcont,
    name: "EBCONT group GmbH, Austria"
  },
  {
    image: logoCybergrid,
    name: "Cybergrid, Austria"
  },
  {
    image: logoEveris,
    name: "Everis, Chile",
    caseStudy: "/about/references/everis"
  },
  {
    image: logoAbanka,
    name: "Abanka"
  },
  {
    image: logoPetrol,
    name: "Petrol d.d."
  },
  {
    image: logoAdriatic,
    name: "Adriatic Slovenica"
  },
  {
    image: logoSnaga,
    name: "Snaga"
  },
  {
    image: logoEnergetika,
    name: "Energetika Ljubljana"
  },
  {
    image: logoZZZS,
    name: "ZZZS"
  },
  {
    image: logoMinPubAdmin,
    name: "Government - Ministry of Public Administration"
  },
  {
    image: logoMinJust,
    name: "Goverment - Ministry of Justice"
  },
  {
    image: logoPBS,
    name: "Poštna banka Slovenije"
  },
  {
    image: logoMMTurist,
    name: "MM turist"
  },
  {
    image: logoSolvera,
    name: "Solvera Lynx"
  },
  {
    image: logoIRC,
    name: "IRC Celje"
  },
  {
    image: logoSRC,
    name: "Src"
  },
  {
    image: logoInformatika,
    name: "Informatika d.d."
  },
  {
    image: logoHardlab,
    name: "Hardlab"
  },
  {
    image: logoTovarna,
    name: "Tovarna podjemov"
  },
  {
    image: logoPrva,
    name: "Prva Osebna zavarovalnica"
  },
  {
    image: logoKneip,
    name: "Kneip Communication, Luxembourg"
  },
  {
    image: logoChile,
    name: "Chile Government (funded by World Bank)"
  },
  {
    image: logoIBM,
    name: "IBM Java Technology Centre"
  },
  {
    image: logoOracle,
    name: "Oracle HQ"
  },
  {
    image: logoEbrad,
    name: "European Bank for Reconstruction and Development (EBRD), EU"
  },
  {
    image: citytech,
    name: "Citytech"
  }, {
    image: logoGlobePayroll,
    name: "GlobePayroll"
  },
  {
    image: logoSava,
    name: "Zavarovalnica Sava"
  }
]


export class ReferencesSpinner extends Component {

  render() {

    const responsive = {

      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
      }
    }

    return (
      <Carousel responsive={responsive} arrows={false} swipeable={true} infinite={true} autoPlay={true}
                autoPlaySpeed={2000}>
        {references.map((reference, index) => (
          <div className="spinner-item" key={index}>
            <img src={reference.image} alt={reference.name}/>
          </div>
        ))}
      </Carousel>
    )
  }

}
