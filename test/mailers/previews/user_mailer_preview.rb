# Preview all emails at http://localhost:3000/rails/mailers/user_mailer
class UserMailerPreview < ActionMailer::Preview
  def welcome_email
    @user = User.first
    @post = Post.first
    UserMailer.with(user: @user, post: @post).welcome_email
  end
end
