
public class Task_01 {

	public static void main(String[] args) {

		int highScorePosition = calculateHighScorePosition(1500);
		displayHighScorePosition("Mike", highScorePosition);

		int highScorePosition1 = calculateHighScorePosition(900);
		displayHighScorePosition("Julie", highScorePosition1);

		int highScorePosition2 = calculateHighScorePosition(400);
		displayHighScorePosition("Mary", highScorePosition2);

		displayHighScorePosition("Adam", calculateHighScorePosition(100));

	}

	public static void displayHighScorePosition(String playerName, int highScorePosition) {

		System.out.println(
				playerName + " managed to get into position " + highScorePosition + " on the high score table");
	}

	public static int calculateHighScorePosition(int playerScore) {

		if (playerScore >= 1000) {
			return 1;
		} else if (playerScore >= 500 && playerScore < 1000) {
			return 2;
		} else if (playerScore >= 100 && playerScore < 500) {
			return 3;
		} else {
			return 4;
		}
	}
}
