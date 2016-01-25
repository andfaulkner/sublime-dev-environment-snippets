# get rvm
\curl -sSL https://get.rvm.io | bash -s stable --ruby

# install ruby with rvm
rvm install ruby-2.3.0
rvm use 2.3.0 --default

# generate ruby docs
rvm docs generate-ri

# add this to bottom of .bashrc (or .bash_profile, rather) file # CONFIRM THIS ONE
[[ -s "$HOME/.rvm/scripts/rvm" ]] && source "$HOME/.rvm/scripts/rvm" 
### possibly this too:
source ~/.profile

# rvm fixes...
command curl -sSL https://rvm.io/mpapis.asc | gpg --import -
rvm get stable --auto-dotfiles

# then...
/bin/bash --login
rvm use 2.3.0 --default

gem install bundler
rvm @global do sudo gem install bundler



gem install debugger-ruby_core_source

## edited Gemfile - changed require "debugger" to require "byebug" 
rvm @global do sudo gem install byebug

rvm alias create default 2.3.0


rvm current

# to get your ruby gems folder
rvm gemdir


# load change to path made by rvm install
. ~/.bashrc
. ~/.bash_profile

# get ruby-install
wget -O ruby-install-0.6.0.tar.gz https://github.com/postmodern/ruby-install/archive/v0.6.0.tar.gz
tar -xzvf ruby-install-0.6.0.tar.gz
cd ruby-install-0.6.0/
sudo make install

# get rbenv and a plugin
sudo apt-get install rbenv
git clone https://github.com/rbenv/ruby-build.git ~/.rbenv/plugins/ruby-build

# install latest ruby
# ruby-install ruby 2.3.0
ruby-install --system ruby 2.3.0

################################### GEMS ###################################
# update rubygems
rvm @global do sudo gem install rubygems-update
sudo update_rubygems

# get "rerun" module, to allow insta-rerunning of ruby scripts (a la nodemon)
rvm @global do sudo gem install rerun

# to make rerun work smoothly
rvm @global do sudo gem install rb-fsevent

# filesize gem
rvm @global do sudo gem install filesize

# color terminal output 
rvm @global do sudo gem install colorize

# rush module - more filesystem control
rvm @global do sudo gem install rush2

# ????? __- yard - a ruby doc generation gem -__ ????? <<< MAY NOT BE USEFUL
rvm @global do sudo gem install yard

# output array of arrays to cli in table format - VERY simple - no wrapping
sudo gem install terminal-table
rvm @global do sudo gem install terminal-table
# table = Terminal::Table.new :rows=>my_array_of_arrays_here

# output array of arrays to cli in table format - wrapping, more complex
sudo gem install tty-table
rvm @global do sudo gem install tty-table
############################################################################

# get this
cp ~/.irbrc ~/.irbrc_bk
curl https://raw.githubusercontent.com/andfaulkner/sublime-nodejs-dev-environment-snippets/master/dev-env/.irbrc > ~/.irbrc

# cross-session history for irb
rvm @global do sudo gem install wirble

# bookmark this: http://rubular.com/
# --- it's an online regex tester for ruby

# Rails
rvm @global do sudo gem install rails

#If you're doing Rails...
rails new --database=postgresql [./path/to/new/project/dir/here]

# OR...rails likes sqlite
sudo apt-get install sqlite3
