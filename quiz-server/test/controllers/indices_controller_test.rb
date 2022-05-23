require "test_helper"

class IndicesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @index = indices(:one)
  end

  test "should get index" do
    get indices_url, as: :json
    assert_response :success
  end

  test "should create index" do
    assert_difference("Index.count") do
      post indices_url, params: { index: {  } }, as: :json
    end

    assert_response :created
  end

  test "should show index" do
    get index_url(@index), as: :json
    assert_response :success
  end

  test "should update index" do
    patch index_url(@index), params: { index: {  } }, as: :json
    assert_response :success
  end

  test "should destroy index" do
    assert_difference("Index.count", -1) do
      delete index_url(@index), as: :json
    end

    assert_response :no_content
  end
end
