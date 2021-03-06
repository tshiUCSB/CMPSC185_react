import {Component} from 'react';

class TableBody extends Component {
	render() {
		return (
			<table className="border-solid">
			<thead>
				<tr>
					<th>Name</th>
					<th>Description</th>
					<th>Year</th>
				</tr>
			</thead>

			<tbody>
				<tr>
					<td><a href="https://devpost.com/software/oxymora-the-elemental-marksman">Oxymora: The Elemental Marksman</a></td>
					<td>
						This is game that allows any amount of people to play. You start off by selecting a color for your character by selecting a hex color combination. Then you drop into the map where you are free to place platforms at your disposal. Once everyone is happy with their platform placements, everyone will ready up by hitting Enter which will spawn the worm boss. By pressing the Q key, the player will switch to their fire mode where they will shoot the worm boss.
					</td>
					<td>2020</td>
				</tr>

				<tr>
					<td><a href="https://devpost.com/software/solarria">Solarria</a></td>
					<td>
						A great way to enjoy a cool video game with friends. Play as cats and fly around.
					</td>
					<td>2020</td>
				</tr>

				<tr>
					<td><a href="https://devpost.com/software/mmcbfbbr">MMCBFBBR</a></td>
					<td>
						A two-phase 2D multiplayer game that allows players to interact with the game via their devices that reflect their motions on a common shared screen. The first phase has one player randomly selected to be Waffle while other players join as knights. All players can toggle between sprite movement or spotlight movement using gyroscope on their devices. All deal damage by focusing the spotlight on their target for a prolonged duration. Players only enter the second battle royale phase if they successfully beat the player-controlled boss. Then Players focus their spotlights on each other in their attempts to remain the last one standing.
					</td>
					<td>2019</td>
				</tr>

				<tr>
					<td><a href="https://devpost.com/software/tripman">Mineyeeter</a></td>
					<td>
						This is not your normal minesweeper game that we all know and love! There are two players: a VR player who is blind to the actual minesweeper maze and non VR device player who can see parts of the minesweeper field as the VR player walks around. Both players must communicate to make sure the VR player doesn't step on any bombs. There is also an added challenge for the VR player to dodge obstacles that come to them during the game. The player can also destroy these objects by 'yeeting' the floor blocks at the flying objects. :)
					</td>
					<td>2019</td>
				</tr>
			</tbody>
			</table>
		);
	}
}

export default TableBody;