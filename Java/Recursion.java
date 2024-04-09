import java.util.ArrayList;
import java.util.Arrays;

/**
 * Recursion
 */
public class Recursion {

    public static void main(String[] args) {
        int arr[] = { 9, 8, 1, 8, 8 };
        int indexArr[] = allIndexes(arr, 8);
        for (int x : indexArr) {
            System.out.print(x + " ");
        }
        System.out.println();
        System.out.println(replaceCharactersRecur("vyyv", 'y', 'v'));
        System.out.println(replaceAllX("abx"));
        System.out.println(removeDup("aabccbaa"));
        int unsortedArr1[] = { 3, 4, 5, 1, 2, 9, 8, 7 };
        int unsortedArr2[] = { 2, 6, 8, 5, 4, 3 };
        mergeSort(unsortedArr1, 0, 7);
        System.out.print("Merge Sort: ");
        print(unsortedArr1);
        quickSort(unsortedArr2, 0, 5);
        System.out.print("Quick Sort: ");
        print(unsortedArr2);
        towerOfHanoi(3, 'a', 'b', 'c');
        String strArr[] = keypad(23);
        print(strArr);
        int bsArr[] = { 3, 12, 18, 28, 29, 30, 35, 36, 40, 45 };
        System.out.println("Binary Search " + BSrecursive(bsArr, 3, 0, bsArr.length - 1));
        int[] array = { 1, 2, 3 };
        // int[][] res = subsets(array);
        // for (int[] x : res) {
        // for (int y : x) {
        // System.out.print(y);
        // }
        // System.out.println();
        // }0
        int pdt = multiply(3, 5);
        System.out.println(pdt);
        String s = addStars("hello");
        System.out.println(s);
        boolean res = checkSeq("abcdodafhjiaklnal", "coding");
        System.out.println(res);
        int splitArr[] = {};
        System.out.println(canDivideIntoGroups(splitArr));
    }

    public static boolean canDivideIntoGroups(int[] A) {
        Arrays.sort(A);

        int sumG1 = 0;
        int sumG2 = 0;

        for (int i = A.length - 1; i >= 0; i--) {
            if (A[i] % 5 == 0) {
                sumG1 += A[i];
            } else if (A[i] % 3 == 0 && A[i] % 5 != 0) {
                sumG2 += A[i];
            } else {
                // Elements neither divisible by 5 nor by 3 can be placed in either group
                if (sumG1 <= sumG2) {
                    sumG1 += A[i];
                } else {
                    sumG2 += A[i];
                }
            }
        }

        return sumG1 == sumG2;
    }

    public static boolean checkSeq(String a, String b) {
        if (b.length() <= 0) {
            return true;
        }
        if (a.length() <= 0) {
            return false;
        }
        if (b.charAt(0) == a.charAt(0)) {
            return checkSeq(a.substring(1), b.substring(1));
        } else {
            return checkSeq(a.substring(1), b);
        }
    }

    public static String addStars(String s) {
        if (s.length() == 1) {
            return s;
        }
        String smallStr = addStars(s.substring(1));
        char firstChar = s.charAt(0);
        char secondChar = s.charAt(1);
        String output = "";
        if (firstChar == secondChar) {
            output = firstChar + "*" + smallStr;
        } else {
            output = firstChar + smallStr;
        }
        return output;
    }

    public static int multiply(int m, int n) {
        if (n <= 1) {
            return m;
        }
        int smallerOutput = multiply(m, n - 1);
        int output = m + smallerOutput;
        return output;
    }

    public static int[][] subsets(int[] A) {
        int totalSubsets = (int) Math.pow(2, A.length);
        int[][] res = new int[totalSubsets][];
        int[] subset = new int[A.length];
        int[] resIndex = { 0 };

        int index = 0;
        calcSubset(A, res, subset, 0, index, resIndex);

        return res;
    }

    public static void calcSubset(int[] A, int[][] res, int[] subset, int subsetSize, int index, int[] resIndex) {
        // Add the current subset to the result array
        res[resIndex[0]++] = Arrays.copyOf(subset, subsetSize);

        // Generate subsets by recursively including and excluding elements
        for (int i = index; i < A.length; i++) {
            // Include the current element in the subset
            subset[subsetSize] = A[i];

            // Recursively generate subsets with the current element included
            calcSubset(A, res, subset, subsetSize + 1, i + 1, resIndex);

            // Exclude the current element from the subset (backtracking)
        }
    }

    public static int BSrecursive(int arr[], int target, int start, int end) {
        if (start > end) {
            return -1;
        }
        int mid = start + (end - start) / 2;
        if (arr[mid] == target) {
            return mid;
        } else if (arr[mid] > target) {
            return BSrecursive(arr, target, start, mid - 1);
        } else {
            return BSrecursive(arr, target, mid + 1, end);
        }
    }

    public static String[] keypad(int n) {
        if (n == 0 || n == 1) {
            String ans[] = { "" };
            return ans;
        }
        int lastDigit = n % 10;
        int smallNumber = n / 10;
        String smallerOutput[] = keypad(smallNumber);
        String keyPadString = keypadStrings(lastDigit);
        String finalOutput[] = new String[keyPadString.length() * smallerOutput.length];
        int k = 0;
        for (int i = 0; i < smallerOutput.length; i++) {
            for (int j = 0; j < keyPadString.length(); j++) {
                finalOutput[k] = smallerOutput[i] + keyPadString.charAt(j);
                k++;
            }
        }
        return finalOutput;
    }

    public static String keypadStrings(int n) {
        if (n == 2)
            return "abc";
        if (n == 3)
            return "def";
        if (n == 4)
            return "ghi";
        if (n == 5)
            return "jkl";
        if (n == 6)
            return "mno";
        if (n == 7)
            return "pqrs";
        if (n == 8)
            return "tuv";
        if (n == 9)
            return "wxyz";
        else
            return "";
    }

    public static void towerOfHanoi(int n, char s, char a, char d) {
        if (n == 1) {
            System.out.println("Move the disk 1 from " + s + " to " + d);
            return;
        }
        if (n > 0) {
            towerOfHanoi(n - 1, s, d, a);
            System.out.println("Move the disk " + n + " from " + s + " to " + d);
            towerOfHanoi(n - 1, a, s, d);
        }

    }

    public static void quickSort(int arr[], int start, int end) {
        if (start >= end) {
            return;
        }
        int pivotIndex = partition(arr, start, end);
        quickSort(arr, start, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, end);
    }

    public static int partition(int arr[], int start, int end) {
        int pivotElement = arr[end];
        int smallerElementCount = start - 1;
        for (int i = start; i < end; i++) {
            if (arr[i] <= pivotElement) {
                smallerElementCount++;
                swap(arr, smallerElementCount, i);
            }
        }
        swap(arr, smallerElementCount + 1, end);
        return smallerElementCount + 1;
    }

    public static void swap(int arr[], int i, int j) {
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    public static void mergeSort(int arr[], int low, int high) {
        if (low >= high) {
            return;
        }
        int mid = low + (high - low) / 2;
        mergeSort(arr, low, mid);
        mergeSort(arr, mid + 1, high);
        merge(arr, low, mid, high);
    }

    public static void merge(int arr[], int low, int mid, int high) {
        int size1 = mid - low + 1;
        int size2 = high - mid;

        int leftArr[] = new int[size1];
        int rightArr[] = new int[size2];

        for (int i = 0; i < size1; i++) {
            leftArr[i] = arr[low + i];
        }
        for (int i = 0; i < size2; i++) {
            rightArr[i] = arr[mid + 1 + i];
        }
        int ptr1 = 0, ptr2 = 0;
        int k = low;
        while (ptr1 < size1 && ptr2 < size2) {
            if (leftArr[ptr1] <= rightArr[ptr2]) {
                arr[k] = leftArr[ptr1];
                ptr1++;
            } else {
                arr[k] = rightArr[ptr2];
                ptr2++;
            }
            k++;
        }
        while (ptr1 < size1) {
            arr[k++] = leftArr[ptr1++];
        }
        while (ptr2 < size2) {
            arr[k++] = rightArr[ptr2++];
        }
    }

    public static String removeDup(String s) {
        if (s.length() <= 1) {
            return s;
        }

        if (s.charAt(0) == s.charAt(1)) {
            return removeDup(s.substring(1));
        } else {
            return s.charAt(0) + removeDup(s.substring(1));
        }
    }

    public static String replaceAllX(String s) {
        if (s.length() == 0) {
            return s;
        }
        String smallString = replaceAllX(s.substring(1));
        if (s.charAt(0) == 'x') {
            return smallString;
        } else {
            return s.charAt(0) + smallString;
        }
    }

    public static String replaceCharactersRecur(String s, char a, char b) {
        if (s.length() == 0) {
            return s;
        }
        String smallString = replaceCharactersRecur(s.substring(1), a, b);
        if (s.charAt(0) == a) {
            return b + smallString;
        } else {
            return s.charAt(0) + smallString;
        }
    }

    public static int[] allIndexes(int arr[], int num) {
        ArrayList<Integer> indexList = new ArrayList<>();
        allIndexesHelper(arr, num, 0, indexList);
        int[] indexArr = new int[indexList.size()];
        for (int i = 0; i < indexList.size(); i++) {
            indexArr[i] = indexList.get(i);
        }
        return indexArr;
    }

    public static void allIndexesHelper(int arr[], int num, int currIndex, ArrayList<Integer> indexList) {
        if (currIndex == arr.length) {
            return;
        }
        if (arr[currIndex] == num) {
            indexList.add(currIndex);
        }
        allIndexesHelper(arr, num, currIndex + 1, indexList);
    }

    public static void print(int arr[]) {
        for (int x : arr) {
            System.out.print(x + " ");
        }
        System.out.println();
    }

    public static void print(String arr[]) {
        for (String x : arr) {
            System.out.print(x + " ");
        }
        System.out.println();
    }
}