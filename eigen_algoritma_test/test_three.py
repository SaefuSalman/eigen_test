def count_words(INPUT, QUERY):
    word_count = {}
    for word in INPUT:
        word_count[word] = word_count.get(word, 0) + 1
    print(word_count, "WORDD COUNT")
    result = [word_count.get(word, 0) for word in QUERY]
    
    return result

INPUT = ['xc', 'dz', 'aaa', 'dz', 'aaa']
QUERY = ['aaa', 'ac', 'dz']

output = count_words(INPUT, QUERY)
print("OUTPUT =", output)
