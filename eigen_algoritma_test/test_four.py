def diagonal_difference(matrix):
    diagonal1_sum = sum(matrix[i][i] for i in range(len(matrix)))
    print(diagonal1_sum, 'diagonal 111 summmm')
    diagonal2_sum = sum(matrix[i][len(matrix)-1-i] for i in range(len(matrix)))
    print(diagonal2_sum, 'diagonal 222 summmm')
    print
    return abs(diagonal1_sum - diagonal2_sum)

Matrix = [[1, 2, 0], [4, 5, 6], [7, 8, 9]]
result = diagonal_difference(Matrix)
print("Hasil dari pengurangan diagonal matriks adalah:", result)
