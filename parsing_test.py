# test to convert raw text to Reverse Polish Notation (RPN)
# an example of RPN is "3 + 4" -> "34+", or "3 - 4 * 5" -> "345-*"

digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
operators = ['+', '-', '*', '/', '^', '!']

# take in a mathematical expression in infix form,
# convert to RPN, output with parentheses in correct
# places to show correct separation of operations
def parse_add(raw_str):

    # remove spaces from string
    raw_str.replace(" ", "")

    digits_arr = []
    operators_arr = []

    for c in raw_str:
        if c in digits:
            c = int(c)
            digits_arr.append(c)
        elif c in operators:
            operators_arr.insert(0, c)

    rpn_arr = digits_arr + operators_arr
    final_arr = []
    
    for i in range(0, len(rpn_arr)):

        if rpn_arr[i] == "||":
            continue
        
        if rpn_arr[i] in operators:
            x = str(rpn_arr[i - 2])
            y = str(rpn_arr[i - 1])
            op = rpn_arr[i]

            rpn_arr[i] = "(" + x + " " + op + " " + y + ")"
            rpn_arr[i - 1] = "||"
            rpn_arr[i - 2] = "||"

    print(str(rpn_arr))


parse_add("3 - 4 * 5")
