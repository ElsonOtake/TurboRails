class UserMailer < ApplicationMailer
  default from: 'notifications@example.com'

  def welcome_email
    @user = params[:user]
    @post = params[:post]
    @url  = 'http://example.com/login'
    # attachments.inline['Puppy dog smiling.png'] = File.read("#{Rails.root}/app/assets/images/Puppy dog smiling.png")
    mail(to: @user.email, subject: 'Welcome to My Awesome Site')
  end
end
