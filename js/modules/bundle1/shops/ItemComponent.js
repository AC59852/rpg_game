  // Always import before template

  // Component Code
  export default {

    props: ['item'],


      // Component HTML using child components
      template: `
      <div>
        <h2>{{ item.name }}</h2>
        <h3 id="realItemPrice">{{ item.price }}</h3>
        <p>{{ item.desc }}</p>
      </div>
      `
  }