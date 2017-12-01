import React, {Component} from 'react';
import './App.css';
import GalleryImage from './components/GalleryImage';
import GalleryModal from './components/GalleryModal';

let imgUrls = [
  'http://mypresentation.ru/documents/884219c23e6888b602805f0674eeb70e/img37.jpg',
  'https://econet.ru/uploads/pictures/119697/content_10__econet_ru.jpg',
  'http://www.pavelin.ru/images/stories/leopard/leo_011.jpg',
  'http://acrosscars.com/uploads/fotos/2015-fnr_concept6.jpg',
  'https://img.day.az/clickable/00/0/354223_004.jpg',
  'https://4589861635b91edaa841-e4ddf20bbb131c4268e6018b2e3d1bb8.ssl.cf1.rackcdn.com/426850.jpg',
  'http://ij.drivenn.ru/jvrcgg1hl076q_1o0xzqe.jpeg',
  'http://luxfon.com/pic/201208/800x600/luxfon.com-16378.jpg',
  'http://luxfon.com/pic/201211/800x600/luxfon.com-17656.jpg',
  'https://www.motto.net.ua/pic/201209/800x600/motto.net.ua-23658.jpg',
  'http://img.desktopwallpapers.ru/women/pics/6e78334bca1eb1f89ab15.jpg',
  'https://www.motto.net.ua/pic/201210/800x600/motto.net.ua-43652.jpg'
];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      url: ''
    },

    this.openModal = this.openModal.bind(this);

    this.closeModal = this.closeModal.bind(this);

    this.showNextFoto = this.showNextFoto.bind(this);
    this.showPrevFoto = this.showPrevFoto.bind(this);
    
    
      
  }

   // Function for opening modal dialog
   openModal(url, e) {
    this.setState({ showModal: true, url: url})
  };

  // Function for closing modal dialog
  closeModal() {
    this.setState({showModal: false, url: ''})
  };


    showNextFoto() {
    
      
      
    };
  

  showPrevFoto() {

  };

  render() {
    return (
      <div className='container-fluid gallery-container'>
        <div className='row'>
          {imgUrls.map((url, index) => {
            
            return <div key={index} className='col-xs-6 col-md-3 col-lg-2'>
              <div className='gallery-card'>
                <GalleryImage src={url} alt={'Image number ' + (index + 1)}/>

                <span
                  className='card-icon-open fa fa-search-plus'
                  value={url}
                  onClick={(e) => this.openModal(url, e)}></span>
              </div>
            </div>
          })
}
        </div>
        <GalleryModal isOpen={this.state.showModal} nextFoto = {this.showNextFoto()} prevFoto onClick={this.closeModal} src={this.state.url}/>
      </div>
      
    )
  }

 
}

export default App;
