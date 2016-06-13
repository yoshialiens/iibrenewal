<?php
	ini_set('session.gc_maxlifetime', 7200);
	
	//セッション管理
	class Session
	{
		private static $instance = null;
		/**
		 * 
		 * @return Session
		 */
		public static function getInstance(){
			if (is_null(self::$instance)) {
				self::$instance = new self();
			}
			return self::$instance;
		}
		
		private function Session(){
			session_start();
		}
		
		public function get($key){
			if(isset($_SESSION[$key])){
				return $_SESSION[$key];
			}
			return false;
		}
		public function set($key, $value){
			$_SESSION[$key] = $value;
		}
		public function clear($key){
			if(isset($_SESSION[$key])){
				unset($_SESSION[$key]);
			}
		}
		public function destroy(){
			$_SESSION = array();
			session_destroy();
			self::$instance = null;
		}
		
		public function dump()
		{
			var_dump($_SESSION);
		}
	}