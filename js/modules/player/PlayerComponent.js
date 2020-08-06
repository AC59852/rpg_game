  // Always import before template

  // Component Code
  export default {

    props: ['player'],


      // Component HTML using child components
      template: `
      <div>
        <h2>{{ player.name }}</h2>
        <h3>{{ player.ability }}</h3>
        <h3>{{ player.dmg }}</h3>
      </div>
      `
  }