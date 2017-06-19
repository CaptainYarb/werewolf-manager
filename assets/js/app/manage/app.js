var manager = angular.module('manager', []);

manager.controller('manage', [
	'$scope',
	function($scope){
		$scope.game = {
			elderDeath: false,
			witchPotion: false,
			witchPoison: false
		};
		$scope.page = 'round';
		$scope.players = [];
		$scope.round = 0;
		var turn = 0;
		$scope.turn = false;
		$scope.playing = false;
		$scope.managePlayer = false;

		$scope.addPlayer = function(){
			$scope.players.push({
				name: '',
				role: '',
				alive: true,
				charmed: false,
				lover: false,
				night: {
					revealed: false,
					defended: false,
					killed: false
				}
			});
		}

		$scope.setupGame = function(){
			$scope.game = {
				elderDeath: false,
				witchPotion: false,
				witchPoison: false
			};
			$scope.playing = false;
			$scope.page = 'round';
			$scope.players = [];
			$scope.round = 0;
			$scope.turn = false;
			var turn = 0;
			$scope.managePlayer = false;
		}

		$scope.roles = roles;
		$scope.turns = turns;
		$scope.actions = actions;
		$scope.action = false;
		$scope.selectedPlayers = [];

		$scope.availableRoles = function(currentPlayer){
			var available = {};
			angular.forEach(roles, function(v, k){
				if(k != 'blank'){
					available[k] = v;
				}
			});
			angular.forEach($scope.players, function(player){
				if(!player.role || currentPlayer == player){
					return;
				}
				var role = roles[player.role];
				if(role && !role.plural){
					delete available[player.role];
				}
			});
			return available;
		}

		$scope.playersVillagers = function(){
			var count = 0;
			angular.forEach($scope.players, function(player){
				if(!player.role){
					return;
				}
				var role = $scope.roles[player.role];
				if(role.team == 'villagers'){
					count++;
				}
			});
			return count;
		}
		$scope.playersVillagersAlive = function(){
			var count = 0;
			angular.forEach($scope.players, function(player){
				if(!player.role){
					return;
				}
				var role = $scope.roles[player.role];
				if(role.team == 'villagers' && player.alive){
					count++;
				}
			});
			return count;
		}
		$scope.playersWerewolves = function(){
			var count = 0;
			angular.forEach($scope.players, function(player){
				if(!player.role){
					return;
				}
				var role = $scope.roles[player.role];
				if(role.team == 'werewolves'){
					count++;
				}
			});
			return count;
		}
		$scope.playersWerewolvesAlive = function(){
			var count = 0;
			angular.forEach($scope.players, function(player){
				if(!player.role){
					return;
				}
				var role = $scope.roles[player.role];
				if(role.team == 'werewolves' && player.alive){
					count++;
				}
			});
			return count;
		}
		$scope.checkVillagerVictory = function(){
			var victory = true,
				count = 0;
			angular.forEach($scope.players, function(player){
				if(!player.role){
					return;
				}
				var role = $scope.roles[player.role];
				if(role.team == 'werewolves'){
					count++;
					if(player.alive){
						victory = false;
					}
				}
			});
			if(count == 0){
				victory = false;
			}
			return victory;
		}
		$scope.checkWerewolfVictory = function(){
			var victory = true,
				count = 0;
			angular.forEach($scope.players, function(player){
				if(!player.role){
					return;
				}
				var role = $scope.roles[player.role];
				if(role.team != 'werewolves'){
					count++;
					if(player.alive){
						victory = false;
					}
				}
			});
			if(count == 0){
				victory = false;
			}
			return victory;
		}
		$scope.checkPiperVictory = function(){
			var victory = true,
				count = 0;
			angular.forEach($scope.players, function(player){
				if(!player.role){
					return;
				}
				var role = $scope.roles[player.role];
				if(player.role != 'piper' && player.alive){
					count++;
					if(!player.charmed){
						victory = false;
					}
				}
			});
			if(count == 0){
				victory = false;
			}
			return victory;
		}

		$scope.gameHasRole = function(role, ignoreDeath){
			var present = false;
			angular.forEach($scope.players, function(player){
				if(player.role && player.role == role && (ignoreDeath || player.alive)){
					present = true;
				}
			});
			return present;
		}

		$scope.playersCharmed = function(){
			var count = 0;
			angular.forEach($scope.players, function(player){
				if(!player.role){
					return;
				}
				if(player.charmed && player.alive){
					count++;
				}
			});
			return count;
		}
		$scope.playersCharmable = function(){
			var count = 0;
			angular.forEach($scope.players, function(player){
				if(!player.role){
					return;
				}
				if(player.role != 'piper' && player.alive){
					count++;
				}
			});
			return count;
		}

		$scope.goTo = function(route){
			$scope.page = route;
		}

		$scope.setManagePlayer = function(player){
			if($scope.playing){
				$scope.managePlayer = player;
			}
		}

		$scope.resetGame = function(){
			if(confirm('Are you sure you want to reset? All game data will be lost!')){
				$scope.setupGame();
			}else{
				return;
			}
		}

		$scope.startGame = function(){
			if($scope.players.length <= 0){
				return alert("Cannot start game without players!");
			}
			$scope.playing = true;
		}


		// PLAYER FUNCTIONS
		$scope.removePlayer = function(player){
			if(confirm('Are you sure you want to remove this player?')){
				var k = $scope.players.indexOf(player);
				if(k){
					$scope.players.splice(k, 1);
				}
			}
		}
		$scope.killPlayer = function(player){
			if(!player.role || !player.alive){
				return;
			}
			player.alive = false;
		}
		$scope.revivePlayer = function(player){
			if(!player.role || player.alive){
				return;
			}
			player.alive = true;
		}
		$scope.uncharmPlayer = function(player){
			if(!player.role || !player.charmed){
				return;
			}
			player.charmed = false;
		}
		$scope.charmPlayer = function(player){
			if(!player.role || player.charmed){
				return;
			}
			player.charmed = true;
		}
		$scope.loverPlayer = function(player){
			if(!player.role || player.lover){
				return;
			}
			player.lover = true;
		}
		$scope.unloverPlayer = function(player){
			if(!player.role || !player.lover){
				return;
			}
			player.lover = false;
		}

		// press events

		$scope.canRunEvent = function(event){
			switch(event){
				case "witchPoison":
					return !$scope.game.witchPoison;
				break;
				case "witchPotion":
					return !$scope.game.witchPotion
				break;
				default:
					return true;
				break;
			}
		}

		$scope.manageAction = function(action){
			$scope.action = $scope.actions[action];
			console.log('action', action, $scope.actions[action])
			//return false;
		}

		$scope.isSelectedPlayer = function(player){
			var key = $scope.selectedPlayers.indexOf(player);
			console.log('key', key);
			if(key === -1){
				return false;
			}else{
				return true;
			}
		}

		$scope.selectPlayer = function(player){
			var key = $scope.selectedPlayers.indexOf(player);
			if(key === -1){
				if(!$scope.action.select || $scope.action.select <= $scope.selectedPlayers.length){
					return false;
				}
				$scope.selectedPlayers.push(player);
			}else{
				$scope.selectedPlayers.splice(key, 1);
			}
		}

		$scope.isCurrentPlayerTurn = function(player){
			if(!turn.role){
				return false;
			}
			if(turn.role == player.role){
				return true;
			}else{
				return false;
			}
		}


		// TURNS

		var getNextTurn = function(index){
			var next = {
				turn: false,
				index: index
			};
			if($scope.playing && $scope.turn){
				angular.forEach(turns, function(turn, count){
					//console.log(turn.shortTitle, count);
					if(count > index && next.turn == false && ($scope.round == 1 || turn.firstNight == false) && (!turn.role || $scope.gameHasRole(turn.role))){
						console.log('setting next', turn.shortTitle);
						next.turn = turn;
						next.index = count;
					}
				});
			}
			console.log('next', next)
			return next;
		}

		$scope.beginNight = function(){
			if(!$scope.playing){
				return alert('Start the game first');
			}
			turn = 0;
			$scope.turn = turns[0];
			$scope.round++;
		}
		$scope.nextTurn = function(){
			switch($scope.turn.role){
				case "cupid":
					angular.forEach($scope.selectedPlayers, function(player){
						player.lover = true;
					});
				break;
				case "defender":
					angular.forEach($scope.selectedPlayers, function(player){
						player.night.defended = true;
					});
				break;
				case "fortuneteller":
					if($scope.selectedPlayers.length > 0){
						angular.forEach($scope.selectedPlayers, function(player){
							player.night.revealed = true;
						});
						$scope.action = actions['fortunetellerDisplay']
					}
				break;
				case "defender":
					angular.forEach($scope.selectedPlayers, function(player){
						player.night.defended = true;
					});
				break;
				case "werewolf":
					angular.forEach($scope.selectedPlayers, function(player){
						if(!player.night.defended){
							player.night.killed = true;
						}
					});
				break;
				case "witch":
					// TODO
				break;
				case "piper":
					angular.forEach($scope.selectedPlayers, function(player){
						player.charmed = true;
					});
				break;
			}
			$scope.selectedPlayers = [];
			var results = getNextTurn(turn);
			if(results.turn){
				// next turn
				turn = results.index;
				$scope.turn = results.turn;
			}else{
				// morning
				turn = 0;
				$scope.turn = false;
				angular.forEach($scope.selectedPlayers, function(player){
					player.night = {
						revealed: false,
						defended: false,
						killed: false
					};
				});
			}
		}

		$scope.getNextTurnName = function(){
			var title = 'Morning',
				results = getNextTurn(turn);
			if(results.turn){
				title = results.turn.shortTitle;
			}
			return title;
		}

		$scope.getNightPlayer = function(action){
			var returnedPlayer = {
				name: 'Nobody',
				role: 'blank'
			};
			angular.forEach($scope.players, function(player){
				if(returnedPlayer.role == 'blank' && player.night[action] == true){
					returnedPlayer = player;
				}
			});
			console.log('Showing player that was', action, returnedPlayer);
			return returnedPlayer;
		}

		$scope.setupGame();
	}
]);

manager.filter('sortPlayers', function(){
	return function(input){
		input.sort(function(a, b){
			if((a.alive && !b.alive) || (a.role && !b.role)){
				return -1;
			}
			if((!a.alive && b.alive) || (!a.role && b.role)){
				return 1;
			}
			return 0;
		});
		return input;
	}
});
manager.filter('random', function(){
	return function(items){
		return items[Math.floor(Math.random()*items.length)];
	}
});