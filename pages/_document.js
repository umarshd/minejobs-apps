import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <div>
            {/* Bootstrap CSS */}
            <link
              rel="stylesheet"
              href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
              integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
              crossOrigin="anonymous"
            />
            <link rel="stylesheet" href="/assets/css/style.css" />
            <link rel="stylesheet" href="/assets/css/bahasa.css" />
            <link rel="stylesheet" href="/assets/css/dataDiri.css" />
            <link rel="stylesheet" href="/assets/css/keahlian.css" />
            <link rel="stylesheet" href="/assets/css/pendidikan.css" />
            <link rel="stylesheet" href="/assets/css/pengalaman.css" />
            <link rel="stylesheet" href="/assets/css/preferensiPekerjaan.css" />
            <link rel="stylesheet" href="/assets/css/profileSetup.css" />
            <link rel="stylesheet" href="/assets/css/unggahResume.css" />
            <link rel="stylesheet" href="/assets/css/editprofile.css" />
            <link rel="stylesheet" href="/assets/css/carilowongan.css" />
            <link rel="stylesheet" href="/assets/css/jadwalinterview.css" />
            <link rel="stylesheet" href="/assets/css/jobdetail.css" />
            <link
              rel="stylesheet"
              href="/assets/css/detailundanganinterview.css"
            />
            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"
              integrity="sha512-1PKOgIY59xJ8Co8+NE6FZ+LOAZKjy+KY8iq0G4B3CyeY6wYHN3yt9PW0XpSriVlkMXe40PTKnXrLnZ9+fkDaog=="
              crossOrigin="anonymous"
            />
          </div>
        </Head>
        <body>
          <Main className="main-wrapper" />
          <NextScript />
          <script
            src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
            integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
            crossorigin="anonymous"
          ></script>
          <script
            src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
            integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
            crossorigin="anonymous"
          ></script>
          <script
            src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
            integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
            crossorigin="anonymous"
          ></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
