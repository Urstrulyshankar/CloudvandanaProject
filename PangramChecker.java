package com.google.www;

import java.util.HashSet;
import java.util.Scanner;
import java.util.Set;

public class PangramChecker {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter a sentence: ");
        String input = scanner.nextLine().toLowerCase();

        boolean isPangram = checkIfPangram(input);

        if (isPangram) {
            System.out.println("The input is a pangram.");
        } else {
            System.out.println("The input is not a pangram.");
        }

        scanner.close();
    }

    public static boolean checkIfPangram(String s) {
        Set<Character> alphabetSet = new HashSet<>();

        for (char ch : s.toCharArray()) {
            if (Character.isLetter(ch)) {
                alphabetSet.add(ch);
            }
        }

        return alphabetSet.size() == 26;
    }
}
