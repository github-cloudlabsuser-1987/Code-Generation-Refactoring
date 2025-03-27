MAX = 100

def calculate_sum(arr: list[int]) -> int:
    return sum(arr)

def main() -> None:
    try:
        n = int(input("Enter the number of elements (1-100): "))
        if not 1 <= n <= MAX:
            print("Invalid input. Please provide a number between 1 and 100.")
            return

        print(f"Enter {n} integers:")
        try:
            arr = [int(input()) for _ in range(n)]
        except ValueError:
            print("Invalid input. Please enter valid integers.")
            return

        total = calculate_sum(arr)
        print("Sum of the numbers:", total)

    except KeyboardInterrupt:
        print("\nProgram terminated by user.")
        return

if __name__ == "__main__":
    main()
