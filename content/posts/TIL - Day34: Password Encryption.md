---
title: "TIL - Day34: Password Encryption"
date: "2019-08-31T22:40:32.169Z"
template: "post"
draft: false
slug: "/posts/TIL - Day34: Password Encryption/"
category: "TIL"
tags:
  - "Python"
  - "Django"
  - "Argon2"
  - "Bcrypt"
  - "Password Encryption"

description: "Introduction of Bcrypt"
---
*This post is written in English(I am not pretty good at thougth)*

Password encryption is one of the important features when you bulid models of Django for a user data table. It is because it contains sensitive information such as passowrd, credit card numbers, or even Social Security Numbers(Resident Registration Number in South Korea) which web developers are supposed to conceal. In order not to leak such information, we encrypt such information unreadable. Amonog that, I would like to talk about how to encrypt password with Argon2 and Bcrypt.

### Bcrypt
It is a prevalent technology to encrypt password. At [Wecode](https://wecode.co.kr/), you will learn how to deal with password via this tool. It is very simple. All you need to do is just follow the sample code below.
```python
   import bcrypt
   encrypted_pw = bcrypt.hashpw(bytes(user_data['password'], 'utf-8'), bcrypt.gensalt())
   User(
        user_id  = user_data['user_id'],
        name     = user_data['name'],
        password = encrypted_pw.decode('utf-8'),
        email    = user_data['email'],
        photo    = user_data.get('photo', ""),
        profile  = user_data.get('profile', ""),
       ).save()
```
When you look at the `encrypted_pw` variable, it has 2 methods as follows: `bcrypt.hashpw` & `bcrypt.gensalt`. Both are in Bcrypt package, which you need to install with command `pip install bcrypt`.
First off, `hashpw` means that you will encrypt input bytes password(first parameter) into one-way hash and encode it in `UTF-8`. Then, you salt it(put unpredictable strings) so as to enhance the code.
That is all! You master how to do that!

After you read all of that above, you get to be wondering how you verify the user when they try to log in to. No worries. There is another method to verify to match the password with hashed one. Let's see the code below:
```python
if bcrypt.checkpw(user_data['password'].encode('utf-8'), user_info.password.encode('utf-8')):
    payload = {
        'id': user_info.id,
        'exp': datetime.datetime.now() + datetime.timedelta(seconds = ONE_DAY),
    }
    encoded_key = settings.SECRET_KEY
    algorithm = 'HS256'
    token = jwt.encode(payload, encoded_key, algorithm)
```
As you can see, `checkpw` method is screening the password whether it is the user's.

Keep in mind, all you need to do are encryption and check!

Plus, there is another encryption extension called Argon2, which is gaining popularity nowadays, so please check the [link](https://passlib.readthedocs.io/en/stable/lib/passlib.hash.argon2.html) how to use it.(It is also very simple and similar to Bcrypt when it comes to usage.)

*Reference: [PassLib - passlib.hash.argon2 - Argon2](https://passlib.readthedocs.io/en/stable/lib/passlib.hash.argon2.html)</br> [PassLib - passlib.hash.bcrypt - BCrypt](https://passlib.readthedocs.io/en/stable/lib/passlib.hash.bcrypt.html)</br> [Password management in Django](https://docs.djangoproject.com/en/2.2/topics/auth/passwords/)*