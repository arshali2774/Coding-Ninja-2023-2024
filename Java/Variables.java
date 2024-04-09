import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Scanner;

public class Variables {
    public static void main(String[] args) {
        int arr1[] = { 2, 6, 8, 5, 4, 3 };
        int arr2[] = { 2, 3, 4, 7 };

        int equilIndexArr[] = { 3, 1, 3, 4, 5, 2 };
        int uniqueNumber[] = { 2, 3, 1, 6, 3, 6, 2 };
        int duplicateNumber[] = { 0, 7, 2, 5, 4, 7, 1, 3, 6 };
        int pairSum[] = { 1, 3, 6, 2, 5, 4, 3, 2, 4 };
        int targetForPairSum = 7;
        int tripletSum[] = { 1, 2, 3, 4, 5, 6, 7 };
        int targetForTripletSum = 12;
        int rotateArr[] = { 1, 2, 3, 4, 5, 6, 7 };
        int D = 2;

        intersectionOfArray(arr1, arr2);
        int equilibriumIndexResult = equilIndex(equilIndexArr);
        System.out.println("equilibriumIndexResult: " + equilibriumIndexResult);
        int uniqueNumberResult = uniqueNumber(uniqueNumber);
        System.out.println("uniqueNumberResult: " + uniqueNumberResult);
        int duplicateNumberResult = duplicateNumber(duplicateNumber);
        System.out.println("duplicateNumberResult: " + duplicateNumberResult);
        int pairCountTwoSum = pairSum(pairSum, targetForPairSum);
        System.out.println("pairSumTwoSum: " + pairCountTwoSum);
        int tripletCountThreeSum = tripletSum(tripletSum, targetForTripletSum);
        System.out.println("tripletCountThreeSum: " + tripletCountThreeSum);
        rotateArr(rotateArr, D);
        print(rotateArr);
        System.out.println();
    }

    public static void rotateArr(int arr[], int D) {
        int n = arr.length;

        // reverse the first D element
        reverseArray(arr, 0, D - 1);

        // reverse remaining N-D elements
        reverseArray(arr, D, n - 1);

        // reverse the entire array
        reverseArray(arr, 0, n - 1);
    }

    public static void reverseArray(int[] arr, int start, int end) {
        while (start < end) {
            int temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
    }

    public static int tripletSum(int[] arr, int num) {
        int count = 0, n = arr.length;
        Arrays.sort(arr);
        for (int i = 0; i < n - 2; i++) {
            int sum = abs(num - arr[i]);
            int low = i + 1, high = n - 1;
            while (low < high) {
                if (arr[low] + arr[high] == sum) {
                    count++;
                    low++;
                    high--;
                } else if (arr[low] + arr[high] < sum) {
                    low++;
                } else {
                    high--;
                }
            }
        }
        return count;
    }

    public static int pairSum(int[] arr, int target) {
        HashMap<Integer, Integer> freqMap = new HashMap<>();
        int pairCount = 0;
        for (int num : arr) {
            if (freqMap.containsKey(target - num)) {
                pairCount += freqMap.get(target - num);
            }
            if (freqMap.containsKey(num)) {
                freqMap.put(num, freqMap.get(num) + 1);
            } else {
                freqMap.put(num, 1);
            }
        }
        return pairCount;
    }

    public static int duplicateNumber(int[] arr) {
        int n = arr.length;
        int expected_sum = ((n - 2) * (n - 1)) / 2;
        int original_sum = 0;
        for (int num : arr) {
            original_sum += num;
        }
        return original_sum - expected_sum;
    }

    public static int uniqueNumber(int[] arr) {
        // we can use xor operation to find the unqiue ele
        // ab xor lagana kaise hai?
        // take a variable and assign it to 0
        // then perform xor on that variable and every element on the array
        // in our case we have 0 ^ 2 for first iteration.
        // now in bitwise operation it will be 00 ^ 10.
        // then we will get output 10, which is 2 in decimal.
        int result = 0;
        for (int num : arr) {
            result ^= num;
        }
        return result;
    }

    public static int equilIndex(int[] arr) {
        int leftSum = 0;
        // calculate right sum
        int rightSum = 0;
        for (int i = 1; i < arr.length; i++) {
            rightSum += arr[i];
        }
        // compare to get the index
        for (int i = 0; i < arr.length - 1; i++) {
            if (leftSum == rightSum) {
                return i;
            } else {
                leftSum += arr[i];
                rightSum -= arr[i + 1];
            }
        }
        return -1;
    }

    public static void intersectionOfArray(int[] arr1, int[] arr2) {
        Arrays.sort(arr1);
        Arrays.sort(arr2);
        int i = 0, j = 0;
        System.out.print("Intersection: ");
        while (i < arr1.length && j < arr2.length) {
            if (arr1[i] < arr2[j]) {
                i++;
            } else if (arr1[i] > arr2[j]) {
                j++;
            } else {
                System.out.print(arr1[i] + " ");
                i++;
                j++;
            }
        }
        System.out.println();
    }

    public static String removeConsecutiveDuplicates(String str) {
        StringBuilder result = new StringBuilder();

        for (int i = 0; i < str.length(); i++) {
            char currentChar = str.charAt(i);

            // Check if the current character is different from the previous one
            if (i == 0 || currentChar != str.charAt(i - 1)) {
                result.append(currentChar);
            }
        }

        return result.toString();
    }

    public static void print(int[] arr) {
        for (int z : arr) {
            System.out.print(z + " ");
        }
        System.out.println();
    }

    public static void print(int[][] arr) {
        for (int i = 0; i < arr.length; i++) {
            for (int j = 0; j < arr[0].length; j++) {
                System.out.print(arr[i][j]);
            }
            System.out.println();
        }
        System.out.println();
    }

    public static void print(int var) {
        System.out.println(var);
        System.out.println();
    }

    public static void print(boolean var) {
        System.out.println(var);
        System.out.println();
    }

    public static void print(String var) {
        System.out.println(var);
        System.out.println();
    }

    public static void print(char var) {
        System.out.println(var);
        System.out.println();
    }

    public static String reverseString(String str) {

        String revStr = "";
        for (int i = str.length() - 1; i >= 0; i--) {
            revStr = revStr + str.charAt(i);
        }
        return revStr;
    }
}
