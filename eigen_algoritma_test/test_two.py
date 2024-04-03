def longest_word(sentence):
    words = sentence.split()
    print(words, "WORDDDSSS")
    longest = ""
    for word in words:
        print(word, 'WORDDD')
        print(longest, "LONGESS")
        if len(word) > len(longest):
            longest = word

    return longest

sentence = "Saya sangat senang mengerjakan soal algoritma"
longest_word_in_sentence = longest_word(sentence)
print("Kata terpanjang:", longest_word_in_sentence, ":", len(longest_word_in_sentence), "karakter")
