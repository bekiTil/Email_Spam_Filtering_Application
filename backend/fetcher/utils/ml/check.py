import pandas as pd 
import pickle
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB
import joblib

def is_spam(message):

    df= pd.read_csv("/home/yeabsira/Documents/CS/code/Email_Spam_Filtering_Application/backend/fetcher/utils/ml/spam.csv", encoding="latin-1") # TODO: figure out relative path
    df.drop(['Unnamed: 2', 'Unnamed: 3', 'Unnamed: 4'], axis=1, inplace=True)
    
    # Features and Labels
    df['v1'] = df['v1'].map({'ham': 0, 'spam': 1})
    X = df['v2']
    y = df['v1']
    
    # Extract Feature With CountVectorizer
    cv = CountVectorizer()
    X = cv.fit_transform(X) # Fit the Data
    from sklearn.model_selection import train_test_split
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.33, random_state=42)

    #Naive Bayes Classifier
    from sklearn.naive_bayes import MultinomialNB

    clf = MultinomialNB()
    clf.fit(X_train,y_train)
    clf.score(X_test,y_test)

    data = [message]
    vect = cv.transform(data).toarray()
    my_prediction = clf.predict(vect)

    return [False, True][my_prediction[0]]