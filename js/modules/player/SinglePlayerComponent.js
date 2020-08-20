export default {
    props: ['player'],

    template: `
    <div>
        <h2 class="playerName">{{ player.name }}</h2>
        <h3>{{ player.ability }}</h3>
        <h3 :class="player.ability">{{ player.dmg }}</h3>
        <h3 :class="player.ability">{{ player.hp }}</h3>
    </div>
    `,

    mounted: function() {
    }
}