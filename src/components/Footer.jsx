import { Component } from 'react';
import { FaTwitter, FaInstagram} from 'react-icons/fa';

export default class Footer extends Component {

  constructor(){
    super()
    this.state={
      counter: 0
    }
  }


  inc_counter = ()=>{
    this.setState({
      counter: this.state.counter+1
    })
  }

  render(){


    return (
      <>
        <div className="container">
          <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <div className="col-md-4 d-flex align-items-center">
              <a
                href="/"
                className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
              >
                <svg className="bi" width="30" height="24">
                  <use xlinkHref="#bootstrap"></use>
                </svg>
              </a>
              <span className="text-muted">© 2021 Company, Inc</span>
            </div>
  
            <span className="text-success">{this.state.counter}</span>
            <button className="btn btn-primary" onClick={this.inc_counter}>Inc Counter</button>

            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
              <li className="ms-3">
                <a className="text-muted" href="#">
                  <svg className="bi" width="24" height="24">
                    {/* <use xlinkHref="#twitter"></use> */}
                    <FaTwitter />
                  </svg>
                </a>
              </li>
              <li className="ms-3">
                <a className="text-muted" href="#">
                  <svg className="bi" width="24" height="24">
                    {/* <use xlinkHref="#instagram"></use> */}
                    <FaInstagram />
                  </svg>
                </a>
              </li>
              <li className="ms-3">
                <a className="text-muted" href="#">
                  <svg className="bi" width="24" height="24">
                    <use xlinkHref="#facebook"></use>
                  </svg>
                </a>
              </li>
            </ul>
          </footer>
        </div>
      </>
    );
  }
}