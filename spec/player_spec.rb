require "#{File.dirname(__FILE__)}/spec_helper"

describe 'player' do
  before(:each) do
    @player = Profile.new(:name => 'test user')
  end

  specify 'should be valid' do
    @player.should be_valid
  end
end
