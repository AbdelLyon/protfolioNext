import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
const Contact = () => {

  return (
    <Layout title='Projets'>
      <Header className="translateUp1-animation">
        <form className='form-content'>
          <div className="form-group">
            <input placeholder="Nom" />
          </div>
          <div id='test' className="form-group">
            <input placeholder="Prénom" />
          </div>
          <div className="form-group">
            <textarea placeholder="Message" rows={5} />
          </div>
          <div className="form-group">
            <select className='my-1' >
              <option>Test option</option>
              <option>Test option</option>
              <option>Test option</option>
              <option>Test option</option>
            </select>
          </div>
          <div className="btn-container">
            <button className='btn btn-primary' type="submit">Envoyer</button>
          </div>
        </form>
      </Header>
      <Footer />
    </Layout>
  )
}

export default Contact;