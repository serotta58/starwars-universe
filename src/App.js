import React, { Component } from 'react';

import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/BackDrop/Backdrop';
import Footer from './components/Footer/Footer';

class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }

    return (
      <div className="App">
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        {/* Make sure main content clears the toolbar above */}
        <main style={{ marginTop: '64px', marginBottom: '32px' }}>
          <p>
            Bacon ipsum dolor amet biltong shank short ribs shankle t-bone alcatra flank drumstick sirloin salami. Corned beef porchetta swine drumstick, buffalo ground round short loin andouille fatback boudin prosciutto short ribs pork biltong. Flank spare ribs pork chop pork belly turducken ribeye. Short ribs chicken ball tip pig leberkas picanha filet mignon, capicola salami. Strip steak jerky shankle, beef picanha cupim sausage venison spare ribs ribeye. Jowl porchetta hamburger, tongue turkey ribeye buffalo cow. Landjaeger meatball tri-tip, chuck cupim brisket jerky fatback buffalo corned beef shankle pork chop pancetta.
          </p>
          <p>
            Filet mignon ham drumstick boudin pork loin tenderloin chuck landjaeger shank swine flank kevin corned beef spare ribs. Jerky tongue biltong cupim, meatball pork sausage drumstick shank pork chop. Flank short loin chicken meatball tongue boudin ground round. Swine shoulder spare ribs cupim corned beef bresaola kielbasa pork loin. Ham andouille alcatra pastrami t-bone kevin capicola chicken pork loin.
          </p>
          <p>
            Shank ribeye kielbasa, pancetta kevin strip steak boudin ball tip. Spare ribs capicola sirloin beef ribs chicken. Ham hock cupim leberkas jowl ground round ribeye kevin porchetta rump doner venison meatball fatback burgdoggen. Kevin pastrami venison, ham hock leberkas filet mignon alcatra chuck corned beef burgdoggen hamburger picanha prosciutto. Pork ground round cow ribeye doner strip steak cupim rump landjaeger turkey ham hock hamburger. Picanha pork prosciutto, beef pancetta bresaola pastrami short ribs jerky sausage strip steak. Ribeye pork loin venison, ham hock spare ribs pig alcatra capicola tail turducken ball tip burgdoggen.
</p>
          <p>
            Pastrami spare ribs burgdoggen ball tip ham bacon buffalo biltong beef. Filet mignon rump andouille hamburger short ribs tenderloin capicola ribeye sirloin doner leberkas brisket beef jerky jowl. Picanha short loin turkey doner salami porchetta tongue. Rump sirloin spare ribs ground round. Flank shoulder ball tip beef short loin bacon t-bone buffalo filet mignon meatball.
</p>
          <p>
            Jerky shoulder doner sirloin bacon ribeye short loin cupim drumstick flank. Ground round drumstick hamburger meatloaf beef ribs, shankle jowl short ribs pork pork chop. Ground round turkey boudin, shank jowl turducken leberkas hamburger meatloaf cow landjaeger. Ham ribeye porchetta burgdoggen. Ribeye short loin jowl ham tri-tip leberkas pastrami bresaola hamburger kevin. Leberkas shankle cow, alcatra pork chop turkey kielbasa meatball filet mignon. Ball tip turkey shank biltong corned beef, jerky ribeye brisket tenderloin.
</p>
          <p>
            Strip steak porchetta pork belly spare ribs filet mignon, sirloin rump biltong. Corned beef shoulder boudin meatloaf. Pork loin beef rump, filet mignon bacon buffalo t-bone. Bacon fatback ground round beef ribs, sausage andouille ham pork frankfurter chuck pancetta porchetta.
</p>
          <p>
            Sausage short loin pork chop, pork bresaola strip steak tenderloin filet mignon frankfurter doner rump boudin turkey tongue fatback. Short ribs pastrami pork loin jerky spare ribs venison buffalo tri-tip. Leberkas shankle swine meatball sirloin hamburger. Andouille bresaola pig, filet mignon chicken spare ribs sausage shoulder doner tail short ribs beef biltong cupim drumstick. Picanha chuck fatback cow drumstick burgdoggen shankle pork loin cupim hamburger pastrami shoulder. Strip steak beef ribs buffalo, pork belly beef tongue pork leberkas chicken rump drumstick. Salami flank pastrami ham, shoulder ham hock beef.
</p>
          <p>
            Pork chop pork loin leberkas chuck, t-bone burgdoggen pig tenderloin boudin. Biltong ground round corned beef boudin sirloin pork belly ham hock frankfurter turducken salami chicken ham bresaola. Bacon filet mignon boudin leberkas meatloaf swine pork loin tenderloin pork belly short ribs tri-tip pork chop. Burgdoggen tail bresaola short ribs, spare ribs swine ground round boudin shoulder.
            </p>
          <p>
            Meatball pork cupim, tenderloin shoulder pastrami ham hock. Tongue chicken pork chop ham shank. Beef ribs alcatra kevin pork belly hamburger burgdoggen doner strip steak. Shoulder burgdoggen sausage bacon meatloaf ball tip hamburger alcatra brisket prosciutto ham pork chop ribeye ham hock. Biltong tenderloin prosciutto drumstick doner.
          </p>
          <p>
            Pork beef ribs tri-tip t-bone tail bacon cupim. T-bone drumstick pork chop venison beef ribs tri-tip kielbasa bacon salami sausage swine capicola. Pork bresaola leberkas ham hock. Strip steak andouille drumstick bacon burgdoggen leberkas ham cupim venison ball tip landjaeger pork doner salami. Ribeye cupim alcatra bresaola sausage spare ribs pork belly.
          </p>
          <p>
            Short loin doner jerky bacon sausage hamburger turkey shank salami ground round shankle beef filet mignon. Ham hock jerky prosciutto, tenderloin ball tip shank landjaeger turkey capicola shoulder pork loin spare ribs andouille. Meatball landjaeger sirloin, tail corned beef shoulder frankfurter rump prosciutto spare ribs salami bacon. Brisket kielbasa ground round, sausage prosciutto pig landjaeger strip steak swine shank. Short ribs turducken drumstick kevin tri-tip pastrami pork chop turkey beef pork pork loin. Pig leberkas tenderloin andouille kielbasa pork chop sausage filet mignon. Boudin swine landjaeger chicken, ground round prosciutto tongue.
          </p>
          <p>
            Shankle shoulder cupim corned beef frankfurter. Tail pork loin buffalo filet mignon spare ribs. Landjaeger ball tip biltong prosciutto pork loin andouille turducken cupim frankfurter buffalo pig picanha. Burgdoggen brisket kielbasa turkey short loin, jerky salami shankle chuck andouille jowl hamburger. Boudin burgdoggen pork belly t-bone. Prosciutto pork jowl, tri-tip ribeye burgdoggen kielbasa flank cow meatloaf tail beef shankle swine.
          </p>
          <p>
            Pork chop landjaeger t-bone sausage alcatra. Tenderloin swine pig fatback, ball tip beef beef ribs tri-tip ham hock leberkas pancetta. Pork belly pork chop corned beef, sausage tri-tip bacon fatback doner flank. Hamburger pork belly chuck alcatra leberkas t-bone shankle tail meatloaf jowl. Andouille bacon alcatra leberkas frankfurter.
          </p>
          <p>
            Filet mignon swine burgdoggen pancetta, drumstick ham fatback salami bacon pastrami turducken chuck. Frankfurter beef ribs bresaola shankle venison hamburger cupim shoulder jerky porchetta alcatra ball tip. Picanha ham hock short loin buffalo andouille pork chop. Turducken ground round bacon bresaola kevin. Meatball pork chop sirloin prosciutto tail bacon swine kielbasa, cupim landjaeger venison spare ribs. Burgdoggen ball tip chicken swine frankfurter doner.
          </p>
          <p>
            Ball tip turducken salami, pork loin sirloin shank swine short ribs corned beef. Spare ribs beef ribs tenderloin, kielbasa ribeye meatloaf salami doner ham hock pork chop ground round. Bacon drumstick short loin picanha beef andouille meatloaf strip steak cupim pancetta jowl boudin t-bone flank brisket. Spare ribs tail burgdoggen, shoulder beef ribs beef meatloaf swine biltong.
          </p>
        </main>
        <footer>
          <Footer />
        </footer>
      </div >
    );
  }
}

export default App;
