import BootstrapState from 'states/BootstrapState';
import LoadingState from 'states/LoadingState';
import TitleState from 'states/TitleState';
import GameState from 'states/GameState';


class Game extends Phaser.Game {

	constructor() {
		super(1280, 736, Phaser.AUTO, 'content', null);

		this.state.add('BootstrapState', BootstrapState, false);
		this.state.add('LoadingState', LoadingState, false);
		this.state.add('TitleState', TitleState, false);
		this.state.add('GameState', GameState, false);

		this.state.start('BootstrapState');
	}
}

export let game = new Game();
