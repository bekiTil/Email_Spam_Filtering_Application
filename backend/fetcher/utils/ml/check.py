import pandas as pd 
import pathlib
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB

def is_spam(message):

    df= pd.read_csv(pathlib.Path(__file__).parent.absolute() / "spam.csv", encoding="latin-1")
    df.drop(['Unnamed: 2', 'Unnamed: 3', 'Unnamed: 4'], axis=1, inplace=True)
    
    df['v1'] = df['v1'].map({'ham': 0, 'spam': 1})
    X = df['v2']
    y = df['v1']
    
    cv = CountVectorizer()
    X = cv.fit_transform(X)
    from sklearn.model_selection import train_test_split
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.33, random_state=42)

    clf = MultinomialNB()
    clf.fit(X_train,y_train)
    clf.score(X_test,y_test)

    data = [message]
    vect = cv.transform(data).toarray()
    my_prediction = clf.predict(vect)

    return [False, True][my_prediction[0]]