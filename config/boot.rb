RACK_ENV  = ENV['RACK_ENV'] ||= 'development'  unless defined?(RACK_ENV)
RACK_ROOT = File.expand_path('../..', __FILE__) unless defined?(RACK_ROOT)

require 'rubygems' unless defined?(Gem)
require 'bundler/setup'
Bundler.require(:default, RACK_ENV)
require 'sinatra/reloader'

require File.join(RACK_ROOT, 'app/app')

class Subwars < Sinatra::Base
  set :public_folder, File.join(RACK_ROOT, 'public')
end

# FileUtils.mkdir_p 'log' unless File.exists?('log')
# log = File.new("log/sinatra.log", "a+")
# $stdout.reopen(log)
# $stderr.reopen(log)
